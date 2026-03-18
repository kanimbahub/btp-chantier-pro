const LANGS = {
  fr: {
    // Navigation
    dashboard: 'Tableau de bord',
    employes: 'Employés & RH',
    pointage: 'Pointage & Paie',
    stock: 'Stock matériaux',
    budget: 'Budget & Imprévus',
    nouveau_chantier: '+ Nouveau chantier',
    deconnexion: '🚪 Déconnexion',
    mode_sombre: '🌙 Mode sombre',
    mode_clair: '☀️ Mode clair',

    // Dashboard
    mes_chantiers: 'Mes chantiers',
    employes_stat: 'Employés',
    budget_stat: 'Budget',
    alertes: 'Alertes',
    total: 'total',
    permanents: 'perm.',
    gnf: 'GNF',
    ruptures: 'stock',
    alertes_stock: 'Alertes stock',
    aucune_alerte: '✅ Aucune alerte',
    en_cours: 'En cours',
    retard: 'Retard',
    planifie: 'Planifié',

    // Employés
    tous: 'Tous',
    permanent: 'Permanent',
    cdd: 'CDD',
    journalier: 'Journalier',
    independant: 'Indépendant',
    stagiaire: 'Stagiaire',
    ajouter: '+ Ajouter',
    editer: '✏️',
    retirer: '✕',
    aucun_employe: 'Aucun employé — cliquez sur + Ajouter',

    // Pointage
    pointage_titre: 'Pointage',
    tous_present: 'Tous ✓',
    valider: 'Valider',
    presents: 'Présents',
    absents: 'Absents',
    paie_jour: 'Paie/jour',
    effectif: 'Effectif',
    actifs: 'actifs',
    paie_du_jour: 'Paie du jour',
    pdf_paie: '📄 PDF Paie',
    historique: 'Historique',
    employe: 'Employé',
    date: 'Date',
    statut: 'Statut',
    remuneration: 'Rémunération',
    total_paie: 'Total',
    aucun_pointage: 'Aucun pointage',

    // Stock
    materiaux: 'Matériaux',
    references: 'Réf.',
    rupture: 'Rupture',
    urgent: 'urgent',
    faible: 'Faible',
    surveiller: 'surveiller',
    valeur: 'Valeur',
    entree_sortie: 'Entrée/Sortie',
    bons_commande: 'Bons de commande',
    fournisseur: 'Fournisseur',
    montant: 'Montant',
    aucun_bon: 'Aucun bon',
    aucun_materiau: 'Aucun matériau',

    // Budget
    initial: 'Initial',
    revise: 'Révisé',
    depense: 'Dépensé',
    ecart: 'Écart',
    imprevu: 'Imprévus',
    phases: 'Phases',
    pdf_rapport: '📄 PDF Rapport',
    enregistrer_imprev: 'Enregistrer un imprévu',
    description: 'Description *',
    priorite: 'Priorité',
    haute: 'Haute',
    moyenne: 'Moyenne',
    basse: 'Faible',
    enregistrer: 'Enregistrer →',
    aucun_imprev: 'Aucun imprévu',
    aucune_phase: 'Aucune phase',
    termine: '✓ Terminé',
    depassement: 'Dépassement',
    a_venir: 'À venir',
    revise_badge: 'Révisé',

    // Modals
    nouveau_chantier_titre: '🏗 Nouveau chantier',
    nom: 'Nom *',
    adresse: 'Adresse',
    date_debut: 'Date début',
    date_fin: 'Date fin prévue',
    budget_initial: 'Budget initial (GNF) *',
    annuler: 'Annuler',
    creer: 'Créer →',
    nouvel_employe: '👷 Nouvel employé',
    modifier_employe: '✏️ Modifier employé',
    infos_perso: 'Informations personnelles',
    nom_label: 'Nom *',
    prenom: 'Prénom',
    date_naissance: 'Date de naissance',
    nationalite: 'Nationalité',
    telephone: 'Téléphone',
    adresse_label: 'Adresse',
    type_piece: 'Type pièce d\'identité',
    numero_piece: 'Numéro pièce',
    choisir: '-- Choisir --',
    profil_pro: 'Profil professionnel',
    role: 'Rôle *',
    experience: 'Années d\'expérience',
    specialites: 'Spécialités',
    contrat_remun: 'Contrat & Rémunération',
    type_contrat: 'Type de contrat *',
    date_embauche: 'Date d\'embauche',
    taux_journalier: 'Taux journalier (GNF)',
    salaire_mensuel: 'Salaire mensuel (GNF)',
    tarif_prestation: 'Tarif prestation (GNF)',
    ajouter_btn: 'Ajouter →',
    maj_btn: 'Mettre à jour →',
    entree_sortie_titre: '📦 Entrée / Sortie',
    materiau: 'Matériau *',
    type: 'Type',
    entree: 'Entrée (livraison)',
    sortie: 'Sortie (utilisation)',
    quantite: 'Quantité *',
    motif: 'Motif',
    nouveau_materiau: '📦 Nouveau matériau',
    unite: 'Unité',
    stock_initial: 'Stock initial',
    stock_max: 'Stock maximum',
    seuil_alerte: 'Seuil alerte',
    prix_unitaire: 'Prix unitaire (GNF)',
    bon_commande_titre: '📋 Bon de commande',
    desc_label: 'Description',
    changer_mdp: '🔑 Changer mot de passe',
    nouveau_mdp: 'Nouveau mot de passe *',
    confirmer: 'Confirmer *',
    compte_connecte: 'Compte connecté',

    // Toasts
    toast_chantier: '✅ Chantier créé !',
    toast_employe_add: '✅ Employe ajouté !',
    toast_employe_maj: '✅ Mis à jour !',
    toast_employe_retire: '✅ Employé retiré',
    toast_presences: '✅ Présences enregistrées !',
    toast_materiau: '✅ Matériau ajouté !',
    toast_mouvement: '✅ Enregistrée !',
    toast_bon: '✅ Bon créé !',
    toast_imprev: '✅ Imprévu enregistré !',
    toast_mdp: '✅ Mot de passe mis à jour !',
    toast_pdf_paie: '✅ PDF paie téléchargé !',
    toast_pdf_rapport: '✅ Rapport PDF téléchargé !',
  },

  en: {
    // Navigation
    dashboard: 'Dashboard',
    employes: 'Employees & HR',
    pointage: 'Attendance & Pay',
    stock: 'Materials Stock',
    budget: 'Budget & Expenses',
    nouveau_chantier: '+ New Project',
    deconnexion: '🚪 Sign Out',
    mode_sombre: '🌙 Dark Mode',
    mode_clair: '☀️ Light Mode',

    // Dashboard
    mes_chantiers: 'My Projects',
    employes_stat: 'Employees',
    budget_stat: 'Budget',
    alertes: 'Alerts',
    total: 'total',
    permanents: 'perm.',
    gnf: 'GNF',
    ruptures: 'stock',
    alertes_stock: 'Stock Alerts',
    aucune_alerte: '✅ No alerts',
    en_cours: 'In Progress',
    retard: 'Delayed',
    planifie: 'Planned',

    // Employés
    tous: 'All',
    permanent: 'Permanent',
    cdd: 'Fixed-term',
    journalier: 'Daily worker',
    independant: 'Freelance',
    stagiaire: 'Intern',
    ajouter: '+ Add',
    editer: '✏️',
    retirer: '✕',
    aucun_employe: 'No employees — click + Add',

    // Pointage
    pointage_titre: 'Attendance',
    tous_present: 'All present ✓',
    valider: 'Confirm',
    presents: 'Present',
    absents: 'Absent',
    paie_jour: 'Daily pay',
    effectif: 'Staff',
    actifs: 'active',
    paie_du_jour: 'Daily Pay',
    pdf_paie: '📄 Pay PDF',
    historique: 'History',
    employe: 'Employee',
    date: 'Date',
    statut: 'Status',
    remuneration: 'Pay',
    total_paie: 'Total',
    aucun_pointage: 'No attendance records',

    // Stock
    materiaux: 'Materials',
    references: 'Ref.',
    rupture: 'Out of stock',
    urgent: 'urgent',
    faible: 'Low',
    surveiller: 'monitor',
    valeur: 'Value',
    entree_sortie: 'In/Out',
    bons_commande: 'Purchase Orders',
    fournisseur: 'Supplier',
    montant: 'Amount',
    aucun_bon: 'No purchase orders',
    aucun_materiau: 'No materials',

    // Budget
    initial: 'Initial',
    revise: 'Revised',
    depense: 'Spent',
    ecart: 'Variance',
    imprevu: 'Unexpected costs',
    phases: 'Phases',
    pdf_rapport: '📄 PDF Report',
    enregistrer_imprev: 'Log unexpected cost',
    description: 'Description *',
    priorite: 'Priority',
    haute: 'High',
    moyenne: 'Medium',
    basse: 'Low',
    enregistrer: 'Save →',
    aucun_imprev: 'No unexpected costs',
    aucune_phase: 'No phases defined',
    termine: '✓ Done',
    depassement: 'Over budget',
    a_venir: 'Upcoming',
    revise_badge: 'Revised',

    // Modals
    nouveau_chantier_titre: '🏗 New Project',
    nom: 'Name *',
    adresse: 'Address',
    date_debut: 'Start date',
    date_fin: 'Expected end date',
    budget_initial: 'Initial budget (GNF) *',
    annuler: 'Cancel',
    creer: 'Create →',
    nouvel_employe: '👷 New Employee',
    modifier_employe: '✏️ Edit Employee',
    infos_perso: 'Personal Information',
    nom_label: 'Last name *',
    prenom: 'First name',
    date_naissance: 'Date of birth',
    nationalite: 'Nationality',
    telephone: 'Phone',
    adresse_label: 'Address',
    type_piece: 'ID document type',
    numero_piece: 'ID number',
    choisir: '-- Choose --',
    profil_pro: 'Professional Profile',
    role: 'Role *',
    experience: 'Years of experience',
    specialites: 'Skills',
    contrat_remun: 'Contract & Pay',
    type_contrat: 'Contract type *',
    date_embauche: 'Hire date',
    taux_journalier: 'Daily rate (GNF)',
    salaire_mensuel: 'Monthly salary (GNF)',
    tarif_prestation: 'Service fee (GNF)',
    ajouter_btn: 'Add →',
    maj_btn: 'Update →',
    entree_sortie_titre: '📦 Stock In / Out',
    materiau: 'Material *',
    type: 'Type',
    entree: 'In (delivery)',
    sortie: 'Out (used)',
    quantite: 'Quantity *',
    motif: 'Reason',
    nouveau_materiau: '📦 New Material',
    unite: 'Unit',
    stock_initial: 'Initial stock',
    stock_max: 'Maximum stock',
    seuil_alerte: 'Alert threshold',
    prix_unitaire: 'Unit price (GNF)',
    bon_commande_titre: '📋 Purchase Order',
    desc_label: 'Description',
    changer_mdp: '🔑 Change Password',
    nouveau_mdp: 'New password *',
    confirmer: 'Confirm *',
    compte_connecte: 'Signed in',

    // Toasts
    toast_chantier: '✅ Project created!',
    toast_employe_add: '✅ Employee added!',
    toast_employe_maj: '✅ Updated!',
    toast_employe_retire: '✅ Employee removed',
    toast_presences: '✅ Attendance saved!',
    toast_materiau: '✅ Material added!',
    toast_mouvement: '✅ Recorded!',
    toast_bon: '✅ Order created!',
    toast_imprev: '✅ Cost logged!',
    toast_mdp: '✅ Password updated!',
    toast_pdf_paie: '✅ Pay PDF downloaded!',
    toast_pdf_rapport: '✅ Report PDF downloaded!',
  }
}

let currentLang = 'fr'

function t(key) {
  return LANGS[currentLang][key] || LANGS['fr'][key] || key
}

function setLang(lang) {
  currentLang = lang
  localStorage.setItem('btp_lang', lang)
  applyTranslations()
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    el.textContent = t(key)
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder)
  })
  // Update lang button
  const btn = document.getElementById('lang-btn')
  if(btn) btn.textContent = currentLang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'
}

function toggleLang() {
  setLang(currentLang === 'fr' ? 'en' : 'fr')
}

// Load saved language
function initLang() {
  const saved = localStorage.getItem('btp_lang') || 'fr'
  currentLang = saved
  applyTranslations()
}
