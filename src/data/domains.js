/**
 * Liste des domaines thématiques disponibles
 */

export const domains = [
    {
        name: "maths",
        label: "Mathématiques",
        href: "#maths",
        icon: "calculator",
    },
    {
        name: "français",
        label: "Français",
        href: "#francais",
        icon: "book",
    },
    {
        name: "sciences",
        label: "Sciences",
        href: "#sciences",
        icon: "beaker",
    },
    {
        name: "histoire",
        label: "Histoire",
        href: "#histoire",
        icon: "clock",
    },
    {
        name: "géographie",
        label: "Géographie",
        href: "#geographie",
        icon: "globe",
    },
    // {
    //     name: "amis",
    //     label: "Sites Amis",
    //     href: "#amis",
    //     icon: "link",
    // },
];

/**
 * Récupère un domaine par son identifiant
 *
 * @param {string} id - Identifiant du domaine
 * @returns {Object|null} Le domaine trouvé ou null
 */
export const getDomainById = (id) => {
    return domains.find((domain) => domain.name === id) || null;
};

/**
 * Récupère tous les domaines
 *
 * @returns {Object[]} Liste de tous les domaines
 */
export const getAllDomains = () => {
    return domains;
};
