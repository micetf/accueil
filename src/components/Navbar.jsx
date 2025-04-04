import { useState } from "react";
import { Search, ChevronRight, Heart, Mail, HelpCircle } from "lucide-react";

/**
 * Composant de barre de navigation réutilisable pour les applications du domaine
 *
 * @param {Object} props - Les propriétés du composant
 * @param {Array<string>} props.breadcrumb - Tableau des éléments du fil d'Ariane (["domaine", "appli1", "sous-page"])
 * @param {string} [props.subtitle] - Sous-titre optionnel à afficher après le dernier élément du fil d'Ariane
 * @param {function} [props.onHelpClick] - Fonction de callback pour le bouton d'aide (optionnel)
 * @param {boolean} [props.showHelp=false] - Indique si le bouton d'aide doit être affiché
 * @returns {JSX.Element} Le composant de barre de navigation
 */
const Navbar = ({ breadcrumb, subtitle, onHelpClick, showHelp = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Construction du sujet pour l'email
    const appPath =
        breadcrumb.length > 1 ? `/${breadcrumb.slice(1).join("/")}` : "";
    const emailSubject = `À propos de ${appPath}`;

    // Détermination du nom de l'application actuelle
    const currentApp = breadcrumb.length > 1 ? breadcrumb[1] : "";

    return (
        <nav className="fixed top-0 w-full bg-gray-800 text-white z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Fil d'Ariane */}
                    <div className="flex items-center space-x-2">
                        {breadcrumb.map((item, index) => (
                            <div key={index} className="flex items-center">
                                {index > 0 && (
                                    <ChevronRight
                                        className="text-gray-400 mx-2"
                                        size={16}
                                    />
                                )}

                                {index === 0 ? (
                                    <a
                                        href="https://micetf.fr"
                                        className="text-xl font-bold hover:text-gray-300"
                                        title="Retour à l'accueil"
                                    >
                                        {item}
                                    </a>
                                ) : index === breadcrumb.length - 1 ? (
                                    <span className="text-xl font-bold">
                                        {item}
                                    </span>
                                ) : (
                                    <a
                                        href={`/${breadcrumb
                                            .slice(1, index + 1)
                                            .join("/")}`}
                                        className="text-gray-300 hover:text-white"
                                    >
                                        {item}
                                    </a>
                                )}
                            </div>
                        ))}

                        {subtitle && (
                            <span className="text-gray-400 text-sm ml-2">
                                – {subtitle}
                            </span>
                        )}
                    </div>

                    {/* Bouton menu mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Actions desktop */}
                    <div className="hidden md:flex items-center space-x-2">
                        {/* Bouton d'aide (optionnel) */}
                        {showHelp && onHelpClick && (
                            <button
                                onClick={onHelpClick}
                                className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                                title="Aide"
                            >
                                <HelpCircle size={20} />
                            </button>
                        )}

                        {/* Bouton PayPal */}
                        <form
                            action="https://www.paypal.com/cgi-bin/webscr"
                            method="post"
                            target="_top"
                        >
                            <button
                                type="submit"
                                className="bg-yellow-500 p-2 rounded hover:bg-yellow-600 transition-colors"
                                title="Si vous pensez que ces outils le méritent... Merci !"
                            >
                                <Heart size={20} />
                            </button>
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input
                                type="hidden"
                                name="hosted_button_id"
                                value="Q2XYVFP4EEX2J"
                            />
                        </form>

                        {/* Bouton Contact */}
                        <a
                            href={`mailto:webmaster@micetf.fr?subject=${encodeURIComponent(
                                emailSubject
                            )}`}
                            className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
                            title="Contacter le webmaster"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Menu mobile */}
                <div
                    className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4`}
                >
                    {showHelp && onHelpClick && (
                        <button
                            onClick={onHelpClick}
                            className="block w-full text-left py-2 text-gray-300 hover:text-white"
                        >
                            Aide
                        </button>
                    )}
                    <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Q2XYVFP4EEX2J"
                        className="block py-2 text-gray-300 hover:text-white"
                        target="_top"
                    >
                        Faire un don
                    </a>
                    <a
                        href="/outils/"
                        className="block py-2 text-gray-300 hover:text-white"
                    >
                        Chercher un outil sur micetf.fr
                    </a>
                    <a
                        href={`mailto:webmaster@micetf.fr?subject=${encodeURIComponent(
                            emailSubject
                        )}`}
                        className="block py-2 text-gray-300 hover:text-white"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
