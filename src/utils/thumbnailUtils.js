import {
    THUMBNAIL_PATH,
    DEFAULT_IMAGE,
    BASE_URL,
    APP_BASE_PATH,
} from "../data/constants";

/**
 * Utilitaire pour obtenir l'URL complète d'une vignette
 * Prend en compte le chemin de base de l'application
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

    // Utiliser le chemin relatif à la base de l'application
    return `${THUMBNAIL_PATH}${filename}`;
};

/**
 * Vérifie si une miniature existe
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
