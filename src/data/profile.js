const profile = {
    name: "Diatou FALL",
    role: "Developpeur Full Stack",
    stack: "React · Node.js · MongoDB",
    availability: "Disponible pour des missions",
    email: "diatoufall278@gmail.com",
    phone: "5813972499",
    location: "Montreal, QC",
    links: {
        github: "https://github.com/diatoufall",
        linkedin: "https://www.linkedin.com/in/diatou-fall-70614729a/",
        cv: "/MONCVDIATOUFALL.pdf",
        calendly: "https://calendly.com/diatoufall278/30min",
    },
};

export const projects = [
    {
       id: 1,
        title: "Gestion de Clinique Médicale - SANTÉ-PLUS",
        description: "Application complète de gestion de rendez-vous médicaux avec gestion des patients, médecins et horaires. Système d'authentification avec 3 rôles (Admin, Médecin, Réceptionniste).",
        impact: "Réalisation en 3 versions : Mode connecté (ADO.NET), Mode déconnecté (LINQ-Dataset) et Mode ORM (Entity Framework). Projet académique noté sur 30 points.",
        tags: ["C#", ".NET", "WinForms", "SQL Server", "Entity Framework", "LINQ"],
        github: "https://github.com/diatoufall/clinique-sante-plus",
        live: "",
        color: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    },
    {
       id: 2,
        title: "Bibliothèque Numérique - Système de Gestion",
        description: "Plateforme web de gestion de bibliothèque avec système d'emprunt/retour, recherche avancée, tableau de bord statistique et notifications.",
        impact: "Projet complet avec authentification sécurisée (Bcrypt), protection CSRF, et interface responsive avec Bootstrap 5.",
        tags: ["PHP 8.x", "MySQL", "Bootstrap 5", "JavaScript", "PDO", "Composer"],
        github: "https://github.com/diatoufall/bibliotheque-numerique",
        live: "",
        color: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)",
    },
    {
        id: 3,
        title: "Système d'Authentification & Personnalisation",
        description: "Système d'authentification sécurisé avec gestion de session, cookies de personnalisation (thème couleur) et protection contre les injections SQL/XSS.",
        impact: "Projet d'examen final incluant gestion des notes étudiants et tableaux de ventes dynamiques.",
        tags: ["PHP", "MySQL", "HTML5/CSS3", "JavaScript", "Bootstrap"],
        github: "https://github.com/diatoufall/auth-personnalisation",
        live: "",
        color: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    },
];

export default profile;
