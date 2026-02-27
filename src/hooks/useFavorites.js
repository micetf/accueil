import { useState, useEffect } from "react";

const STORAGE_KEY = "micetf_favorites";

/**
 * Hook personnalisé pour gérer les applications favorites
 * Persiste les favoris dans le localStorage
 *
 * @returns {{ favorites: string[], toggleFavorite: Function, isFavorite: Function }}
 */
const useFavorites = () => {
    const [favorites, setFavorites] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            // localStorage indisponible (navigation privée, etc.)
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        } catch {
            // Silencieux : échec d'écriture non bloquant
        }
    }, [favorites]);

    /**
     * Ajoute ou retire un favori selon son état actuel
     * @param {string} id - Identifiant de l'application
     */
    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    };

    /**
     * Vérifie si une application est en favori
     * @param {string} id - Identifiant de l'application
     * @returns {boolean}
     */
    const isFavorite = (id) => favorites.includes(id);

    return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
