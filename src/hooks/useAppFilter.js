import { useMemo } from "react";
import { filterAppsBySearchTerm } from "../utils";

/**
 * Hook personnalisé pour filtrer les applications selon un terme de recherche et un domaine
 *
 * @param {Array} applications - La liste des applications à filtrer
 * @param {string} searchTerm - Le terme de recherche (optionnel)
 * @param {string} domain - Le domaine sélectionné (optionnel)
 * @returns {Array} La liste des applications filtrées
 */
const useAppFilter = (applications, searchTerm, domain) => {
    return useMemo(() => {
        // Étape 1: Filtrer par terme de recherche
        let filtered = searchTerm
            ? filterAppsBySearchTerm(applications, searchTerm)
            : applications;

        // Étape 2: Filtrer par domaine
        if (domain) {
            filtered = filtered.filter(
                (app) => app.keywords && app.keywords.includes(domain)
            );
        }

        return filtered;
    }, [applications, searchTerm, domain]);
};

export default useAppFilter;
