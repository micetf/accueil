import React from "react";

const FilterStats = ({
    count,
    totalCount,
    searchTerm,
    selectedDomain,
    domains,
    onClearSearchTerm,
    onClearDomain,
}) => {
    // Trouver le label du domaine sélectionné
    const domainLabel = selectedDomain
        ? domains.find((d) => d.name === selectedDomain)?.label ||
          selectedDomain
        : null;

    // Générer un message approprié selon les filtres actifs
    const getMessage = () => {
        // Cas où aucun filtre n'est actif
        if (!searchTerm && !selectedDomain) {
            return `Toutes les applications (${count})`;
        }

        // Construction du message en fonction des filtres actifs
        let message = `${count} application${count > 1 ? "s" : ""} trouvée${count > 1 ? "s" : ""}`;

        if (count === 0) {
            message = `Aucune application trouvée`;
        }

        if (selectedDomain && searchTerm) {
            return `${message} dans "${domainLabel}" pour "${searchTerm}"`;
        } else if (selectedDomain) {
            return `${message} dans "${domainLabel}"`;
        } else if (searchTerm) {
            return `${message} pour "${searchTerm}"`;
        }

        return message;
    };

    return (
        <div className="py-2 px-1 text-gray-600 flex items-center">
            <span
                className={`text-sm font-medium group ${count === 0 ? "text-orange-600" : ""}`}
            >
                <span
                    className={`inline-block transition-all duration-300 ${count > 0 ? "group-hover:text-blue-600" : ""}`}
                >
                    {getMessage()}
                </span>
                {count !== totalCount && (
                    <span className="ml-1 text-gray-500">
                        sur {totalCount} au total
                    </span>
                )}
            </span>

            {/* Afficher des étiquettes de filtre pour faciliter leur suppression */}
            {(searchTerm || selectedDomain) && (
                <div className="flex ml-4 gap-2">
                    {searchTerm && (
                        <button
                            onClick={() => onClearSearchTerm()}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                        >
                            {searchTerm}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    )}
                    {selectedDomain && (
                        <button
                            onClick={() => onClearDomain()}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors"
                        >
                            {domainLabel}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default FilterStats;
