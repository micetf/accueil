// src/components/HelpContent.jsx
import React from "react";

const HelpContent = () => {
    return (
        <div className="help-content prose prose-blue max-w-none">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
                Bienvenue sur MiCetF
            </h2>

            <p className="mb-4">
                Ce catalogue répertorie toutes les applications pédagogiques
                disponibles sur micetf.fr. Voici comment naviguer efficacement à
                travers nos ressources :
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Rechercher des applications
                    </h3>
                    <p>
                        Utilisez la barre de recherche en haut de page pour
                        trouver des applications par mot-clé. La recherche
                        s'effectue dans les titres, descriptions et mots-clés.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Filtrer par domaine
                    </h3>
                    <p>
                        Utilisez le menu déroulant pour afficher uniquement les
                        applications d'un domaine spécifique (Mathématiques,
                        Français, Sciences, etc.).
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Changer le mode d'affichage
                    </h3>
                    <p>
                        Alternez entre l'affichage en vignettes (idéal pour
                        découvrir visuellement les applications) et l'affichage
                        en liste (pour voir plus de détails à la fois).
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Visiter une application
                    </h3>
                    <p>
                        Cliquez sur le lien "Visiter" pour ouvrir l'application
                        dans un nouvel onglet.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-blue-800 mb-2">
                        Code d'intégration
                    </h3>
                    <p>
                        Pour les enseignants souhaitant intégrer ces outils dans
                        leurs propres sites ou ENT, un code d'intégration est
                        disponible pour chaque application.
                    </p>
                </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium text-blue-800 mb-2">
                    Besoin d'aide supplémentaire ?
                </h3>
                <p>
                    Pour toute question concernant l'utilisation des
                    applications ou pour signaler un problème, n'hésitez pas à
                    contacter :{" "}
                    <a
                        href="mailto:webmaster@micetf.fr"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        webmaster@micetf.fr
                    </a>
                </p>
            </div>
        </div>
    );
};

export default HelpContent;
