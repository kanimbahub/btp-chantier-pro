// Chargement jsPDF depuis CDN
function loadJsPDF(){
  return new Promise((resolve,reject)=>{
    if(window.jspdf){resolve(window.jspdf.jsPDF);return}
    const s=document.createElement('script')
    s.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
    s.onload=()=>resolve(window.jspdf.jsPDF)
    s.onerror=reject
    document.head.appendChild(s)
  })
}

function fmt(n){if(!n)return'0';if(n>=1e9)return(n/1e9).toFixed(1)+'Md GNF';if(n>=1e6)return(n/1e6).toFixed(1)+'M GNF';return Number(n).toLocaleString('fr-FR')+' GNF'}

// ===== PDF PAIE =====
async function genererPDFPaie(chantier, employes, presences, dateDebut, dateFin){
  const jsPDF=await loadJsPDF()
  const doc=new jsPDF()
  const today=new Date().toLocaleDateString('fr-FR')
  let y=20

  // ENTETE
  doc.setFillColor(26,110,58)
  doc.rect(0,0,210,35,'F')
  doc.setTextColor(255,255,255)
  doc.setFontSize(18)
  doc.setFont('helvetica','bold')
  doc.text('BTP CHANTIER PRO',14,14)
  doc.setFontSize(11)
  doc.setFont('helvetica','normal')
  doc.text('Récapitulatif de paie',14,22)
  doc.text(today,196,14,{align:'right'})
  y=45

  // INFOS CHANTIER
  doc.setTextColor(30,30,30)
  doc.setFontSize(12)
  doc.setFont('helvetica','bold')
  doc.text('Chantier : '+chantier.nom,14,y)
  y+=7
  doc.setFontSize(10)
  doc.setFont('helvetica','normal')
  doc.setTextColor(80,80,80)
  doc.text('Période : '+dateDebut+' → '+dateFin,14,y)
  y+=12

  // LIGNE SEPARATRICE
  doc.setDrawColor(26,110,58)
  doc.setLineWidth(0.5)
  doc.line(14,y,196,y)
  y+=8

  // ENTETE TABLEAU
  doc.setFillColor(240,247,240)
  doc.rect(14,y-4,182,8,'F')
  doc.setTextColor(30,30,30)
  doc.setFontSize(9)
  doc.setFont('helvetica','bold')
  doc.text('Employé',16,y+1)
  doc.text('Rôle',70,y+1)
  doc.text('Contrat',110,y+1)
  doc.text('Jours',140,y+1)
  doc.text('Rémunération',165,y+1,{align:'right'})
  doc.text('Total',196,y+1,{align:'right'})
  y+=10

  // LIGNES EMPLOYES
  let grandTotal=0
  doc.setFont('helvetica','normal')
  employes.forEach((e,i)=>{
    if(y>270){doc.addPage();y=20}
    if(i%2===0){doc.setFillColor(250,252,250);doc.rect(14,y-4,182,8,'F')}
    const jours=presences.filter(p=>p.employe_id===e.id&&p.present).length
    const remuJour=e.type_contrat==='permanent'||e.type_contrat==='cdd'?Number(e.salaire_mensuel)/26:e.type_contrat==='independant'?0:Number(e.taux_journalier)
    const total=Math.round(remuJour*jours)
    grandTotal+=total
    doc.setTextColor(30,30,30)
    doc.setFontSize(9)
    doc.text((e.prenom||'')+' '+e.nom,16,y+1)
    doc.text(e.role||'',70,y+1)
    doc.text(e.type_contrat||'',110,y+1)
    doc.text(jours+'j',140,y+1)
    doc.text(fmt(remuJour)+'/j',165,y+1,{align:'right'})
    doc.setFont('helvetica','bold')
    doc.text(fmt(total),196,y+1,{align:'right'})
    doc.setFont('helvetica','normal')
    y+=8
  })

  // TOTAL
  y+=4
  doc.setDrawColor(26,110,58)
  doc.line(14,y,196,y)
  y+=6
  doc.setFillColor(26,110,58)
  doc.rect(130,y-4,66,10,'F')
  doc.setTextColor(255,255,255)
  doc.setFontSize(11)
  doc.setFont('helvetica','bold')
  doc.text('TOTAL À PAYER',132,y+2)
  doc.text(fmt(grandTotal),196,y+2,{align:'right'})

  // PIED DE PAGE
  doc.setTextColor(150,150,150)
  doc.setFontSize(8)
  doc.setFont('helvetica','normal')
  doc.text('Document généré par BTP Chantier Pro — '+today,14,285)

  doc.save('paie_'+chantier.nom.replace(/ /g,'_')+'_'+dateDebut+'.pdf')
  return true
}

// ===== PDF RAPPORT CHANTIER =====
async function genererPDFRapport(chantier, phases, imprevus, employes, materiaux){
  const jsPDF=await loadJsPDF()
  const doc=new jsPDF()
  const today=new Date().toLocaleDateString('fr-FR')
  let y=20

  // ENTETE
  doc.setFillColor(26,110,58)
  doc.rect(0,0,210,35,'F')
  doc.setTextColor(255,255,255)
  doc.setFontSize(18)
  doc.setFont('helvetica','bold')
  doc.text('BTP CHANTIER PRO',14,14)
  doc.setFontSize(11)
  doc.setFont('helvetica','normal')
  doc.text('Rapport d\'avancement',14,22)
  doc.text(today,196,14,{align:'right'})
  y=45

  // INFOS CHANTIER
  doc.setTextColor(30,30,30)
  doc.setFontSize(13)
  doc.setFont('helvetica','bold')
  doc.text(chantier.nom,14,y)
  y+=7
  doc.setFontSize(10)
  doc.setFont('helvetica','normal')
  doc.setTextColor(80,80,80)
  if(chantier.adresse)doc.text('Adresse : '+chantier.adresse,14,y),y+=6
  doc.text('Statut : '+chantier.statut+' | Avancement : '+chantier.avancement+'%',14,y)
  y+=6
  doc.text('Budget initial : '+fmt(chantier.budget_initial),14,y)
  y+=10

  // BARRE AVANCEMENT
  doc.setDrawColor(200,200,200)
  doc.setLineWidth(0.3)
  doc.rect(14,y,182,6)
  doc.setFillColor(26,110,58)
  doc.rect(14,y,182*(chantier.avancement/100),6,'F')
  doc.setTextColor(30,30,30)
  doc.setFontSize(8)
  doc.text(chantier.avancement+'%',197,y+4.5,{align:'right'})
  y+=14

  // PHASES
  doc.setDrawColor(26,110,58)
  doc.line(14,y,196,y)
  y+=6
  doc.setFontSize(12)
  doc.setFont('helvetica','bold')
  doc.setTextColor(26,110,58)
  doc.text('PHASES DU CHANTIER',14,y)
  y+=8

  doc.setFillColor(240,247,240)
  doc.rect(14,y-4,182,8,'F')
  doc.setFontSize(9)
  doc.setTextColor(30,30,30)
  doc.text('Phase',16,y+1)
  doc.text('Avancement',90,y+1)
  doc.text('Prévu',130,y+1,{align:'right'})
  doc.text('Réel',165,y+1,{align:'right'})
  doc.text('Écart',196,y+1,{align:'right'})
  y+=10

  doc.setFont('helvetica','normal')
  phases.forEach((p,i)=>{
    if(y>260){doc.addPage();y=20}
    if(i%2===0){doc.setFillColor(250,252,250);doc.rect(14,y-4,182,8,'F')}
    const ecart=Number(p.budget_reel)-Number(p.budget_prevu)
    doc.setTextColor(30,30,30)
    doc.text(p.nom,16,y+1)
    doc.text(p.avancement+'%',90,y+1)
    doc.text(fmt(p.budget_prevu),130,y+1,{align:'right'})
    doc.text(p.avancement>0?fmt(p.budget_reel):'—',165,y+1,{align:'right'})
    if(ecart>0)doc.setTextColor(200,50,50)
    else if(ecart<0)doc.setTextColor(26,110,58)
    doc.text(p.avancement>0?(ecart>0?'+':'')+fmt(ecart):'—',196,y+1,{align:'right'})
    doc.setTextColor(30,30,30)
    y+=8
  })
  y+=6

  // IMPREVUS
  if(imprevus&&imprevus.length>0){
    if(y>240){doc.addPage();y=20}
    doc.setDrawColor(26,110,58)
    doc.line(14,y,196,y)
    y+=6
    doc.setFontSize(12)
    doc.setFont('helvetica','bold')
    doc.setTextColor(26,110,58)
    doc.text('IMPRÉVUS',14,y)
    y+=8
    const totalImp=imprevus.reduce((s,i)=>s+Number(i.montant),0)
    doc.setFontSize(9)
    doc.setFont('helvetica','normal')
    doc.setTextColor(30,30,30)
    imprevus.forEach((imp,i)=>{
      if(y>270){doc.addPage();y=20}
      if(i%2===0){doc.setFillColor(255,245,245);doc.rect(14,y-4,182,8,'F')}
      doc.text(imp.description,16,y+1)
      doc.text(imp.priorite,130,y+1)
      doc.setTextColor(200,50,50)
      doc.setFont('helvetica','bold')
      doc.text('+'+fmt(imp.montant),196,y+1,{align:'right'})
      doc.setFont('helvetica','normal')
      doc.setTextColor(30,30,30)
      y+=8
    })
    y+=4
    doc.setFont('helvetica','bold')
    doc.text('Total imprévus : +'+fmt(totalImp),196,y,{align:'right'})
    y+=10
  }

  // EQUIPE
  if(employes&&employes.length>0){
    if(y>240){doc.addPage();y=20}
    doc.setDrawColor(26,110,58)
    doc.line(14,y,196,y)
    y+=6
    doc.setFontSize(12)
    doc.setFont('helvetica','bold')
    doc.setTextColor(26,110,58)
    doc.text('ÉQUIPE ('+employes.length+' employés)',14,y)
    y+=8
    doc.setFontSize(9)
    doc.setFont('helvetica','normal')
    doc.setTextColor(30,30,30)
    employes.forEach((e,i)=>{
      if(y>270){doc.addPage();y=20}
      doc.text((e.prenom||'')+' '+e.nom+' — '+e.role+' ('+e.type_contrat+')',16,y)
      y+=6
    })
    y+=4
  }

  // PIED DE PAGE
  doc.setTextColor(150,150,150)
  doc.setFontSize(8)
  doc.setFont('helvetica','normal')
  doc.text('Rapport généré par BTP Chantier Pro — '+today,14,285)

  doc.save('rapport_'+chantier.nom.replace(/ /g,'_')+'_'+today.replace(/\//g,'-')+'.pdf')
  return true
}

// ===== PDF BON DE COMMANDE =====
async function genererPDFBon(chantier, bon){
  const jsPDF=await loadJsPDF()
  const doc=new jsPDF()
  const today=new Date().toLocaleDateString('fr-FR')
  let y=20

  // ENTETE
  doc.setFillColor(26,110,58)
  doc.rect(0,0,210,35,'F')
  doc.setTextColor(255,255,255)
  doc.setFontSize(18)
  doc.setFont('helvetica','bold')
  doc.text('BTP CHANTIER PRO',14,14)
  doc.setFontSize(11)
  doc.setFont('helvetica','normal')
  doc.text('Bon de commande',14,22)
  doc.text('N° BC-'+Date.now().toString().slice(-6),196,22,{align:'right'})
  y=45

  // INFOS
  doc.setTextColor(30,30,30)
  doc.setFontSize(11)
  doc.setFont('helvetica','bold')
  doc.text('Chantier : '+chantier.nom,14,y)
  y+=8
  doc.setFont('helvetica','normal')
  doc.setFontSize(10)
  doc.text('Date : '+today,14,y)
  y+=6
  doc.text('Statut : '+bon.statut.toUpperCase(),14,y)
  y+=14

  // FOURNISSEUR
  doc.setFillColor(240,247,240)
  doc.rect(14,y-4,85,30,'F')
  doc.setFontSize(9)
  doc.setTextColor(80,80,80)
  doc.text('FOURNISSEUR',16,y+1)
  doc.setTextColor(30,30,30)
  doc.setFont('helvetica','bold')
  doc.setFontSize(11)
  doc.text(bon.fournisseur,16,y+10)
  y+=34

  // DETAIL
  doc.setDrawColor(26,110,58)
  doc.line(14,y,196,y)
  y+=8
  doc.setFontSize(9)
  doc.setFont('helvetica','bold')
  doc.setFillColor(240,247,240)
  doc.rect(14,y-4,182,8,'F')
  doc.text('Description',16,y+1)
  doc.text('Montant',196,y+1,{align:'right'})
  y+=10
  doc.setFont('helvetica','normal')
  doc.setTextColor(30,30,30)
  doc.text(bon.description||'—',16,y)
  doc.setFont('helvetica','bold')
  doc.text(fmt(bon.montant),196,y,{align:'right'})
  y+=12

  doc.setDrawColor(26,110,58)
  doc.line(14,y,196,y)
  y+=6
  doc.setFillColor(26,110,58)
  doc.rect(130,y-4,66,10,'F')
  doc.setTextColor(255,255,255)
  doc.setFontSize(11)
  doc.text('TOTAL',132,y+2)
  doc.text(fmt(bon.montant),196,y+2,{align:'right'})

  // SIGNATURE
  y+=30
  doc.setTextColor(30,30,30)
  doc.setFontSize(10)
  doc.setFont('helvetica','normal')
  doc.line(14,y+20,80,y+20)
  doc.line(130,y+20,196,y+20)
  doc.text('Signature émetteur',14,y+25)
  doc.text('Signature fournisseur',130,y+25)

  doc.setTextColor(150,150,150)
  doc.setFontSize(8)
  doc.text('Document généré par BTP Chantier Pro — '+today,14,285)

  doc.save('bon_commande_'+bon.fournisseur.replace(/ /g,'_')+'.pdf')
  return true
}
