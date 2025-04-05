// apps/accueil/src/data/constants.js

// Import pour obtenir la base dynamiquement
import.meta.env.BASE_URL; // Ceci contient la valeur de "base" définie dans vite.config.js

/**
 * Constantes de l'application
 */

/**
 * Version actuelle de l'application
 * @type {string}
 */
export const VERSION = "1.0.0";

/**
 * Date de dernière mise à jour
 * @type {string}
 */
export const LAST_UPDATE = new Date().toISOString().split("T")[0];

/**
 * URL de base du site original
 * @type {string}
 */
export const BASE_URL = "https://micetf.fr";

/**
 * Chemin de base de l'application
 * Utilise la valeur de base définie dans vite.config.js
 * @type {string}
 */
export const APP_BASE_PATH = import.meta.env.BASE_URL;

/**
 * Chemin de base pour les miniatures
 * @type {string}
 */
export const THUMBNAIL_PATH = `${APP_BASE_PATH}assets/thumbnails/`;

/**
 * Chemin vers l'image par défaut
 * @type {string}
 */
export const DEFAULT_IMAGE = `${APP_BASE_PATH}assets/placeholder.png`;
