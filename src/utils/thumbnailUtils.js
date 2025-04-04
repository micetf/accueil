import { THUMBNAIL_PATH, DEFAULT_IMAGE, BASE_URL } from "../data/constants";

/**
 * Utilitaire pour obtenir l'URL complète d'une vignette
 * Fonctionne avec la structure où les images sont dans le dossier public/assets
 *
 * @param {string} filename - Le nom du fichier de la vignette
 * @returns {string} L'URL complète de la vignette
 */
export const getThumbnailUrl = (filename) => {
    if (!filename) {
        return DEFAULT_IMAGE;
    }

    // Si c'est déjà une URL complète, la retourner
    if (filename.startsWith("http")) {
        return filename;
    }

    // Les fichiers dans le dossier public sont accessibles à la racine
    // Cette approche fonctionne avec Vite
    try {
        return `${THUMBNAIL_PATH}${filename}`;
    } catch (error) {
        // Fallback sur l'URL externe
        return `${BASE_URL}/thumbnails/${filename}`;
    }
};

/**
 * Vérifie si une miniature existe
 * Note: Dans un environnement réel, il faudrait implémenter une vérification plus robuste
 *
 * @param {string} filename - Nom du fichier image
 * @returns {boolean} True si l'image existe
 */
export const thumbnailExists = (filename) => {
    if (!filename) return false;
    if (filename.startsWith("http")) return true;

    // Cette vérification est simplifiée
    return true;
};
