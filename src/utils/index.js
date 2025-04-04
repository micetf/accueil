/**
 * Filtre les applications selon un terme de recherche
 *
 * @param {Object[]} apps - Liste des applications à filtrer
 * @param {string} searchTerm - Terme de recherche
 * @returns {Object[]} Liste filtrée des applications
 */
export const filterAppsBySearchTerm = (apps, searchTerm) => {
    if (!searchTerm) return apps;

    const searchLower = searchTerm.toLowerCase();
    return apps.filter(
        (app) =>
            app.title.toLowerCase().includes(searchLower) ||
            app.description.toLowerCase().includes(searchLower) ||
            (app.keywords &&
                app.keywords.some((keyword) =>
                    keyword.toLowerCase().includes(searchLower)
                ))
    );
};

/**
 * Formate une date au format français (JJ/MM/AAAA)
 *
 * @param {Date|string} date - Date à formater
 * @returns {string} Date formatée
 */
export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("fr-FR");
};
