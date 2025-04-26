// src/components/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy prose prose-blue max-w-none text-gray-800">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">
                Politique de confidentialité
            </h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    1. Qui sommes-nous&nbsp;?
                </h2>
                <p>
                    Le site <strong>micetf.fr</strong> est un site éducatif
                    proposant des exercices et outils pour les enseignants et
                    les élèves du primaire.
                </p>
                <p>
                    Responsable du site et développeur&nbsp;: Frédéric MISERY
                    <br />
                    Contact&nbsp;:
                    <a
                        href="mailto:webmaster@micetf.fr"
                        className="text-blue-600 hover:text-blue-800 ml-1"
                    >
                        webmaster@micetf.fr
                    </a>
                </p>
                <p>
                    Le développement et la gestion du site sont assurés par une
                    seule personne qui s'efforce de proposer des outils
                    respectueux du RGPD et reste à l'écoute de toute remarque ou
                    suggestion d'amélioration.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    2. Hébergement
                </h2>
                <p>
                    Le site est hébergé sur une infrastructure mutualisée chez
                    <strong> OVH</strong> (OVHcloud SAS, 2 rue Kellermann, 59100
                    Roubaix, France), qui s'engage à garantir un haut niveau de
                    sécurité et de conformité au RGPD pour l'hébergement des
                    données.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    3. Don via PayPal
                </h2>
                <p>
                    Un bouton de don PayPal est proposé pour permettre aux
                    utilisateurs de contribuer aux frais d'hébergement du site.
                    Les transactions sont gérées directement par PayPal et sont
                    soumises à la politique de confidentialité de PayPal.
                    <strong> micetf.fr</strong> ne conserve aucune donnée
                    bancaire ou relative à la transaction&nbsp;: toutes les
                    informations de paiement sont traitées exclusivement par
                    PayPal.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    4. Quelles données sont collectées et pourquoi&nbsp;?
                </h2>
                <p>
                    Nous collectons uniquement les données strictement
                    nécessaires au fonctionnement du site et des applications
                    proposées. Les données concernées sont&nbsp;:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-1">
                        Pseudonymes (pour enregistrer les scores ou records sur
                        certains exercices)
                    </li>
                    <li className="mb-1">
                        Identifiants de compte (générés à partir de l'adresse
                        email, voir point suivant)
                    </li>
                    <li className="mb-1">
                        Scores, résultats et listes de mots (pour permettre le
                        suivi des exercices et la gestion des listes par les
                        enseignants)
                    </li>
                </ul>
                <p className="font-medium">
                    <strong>
                        Aucune donnée nominative réelle (nom, prénom, email en
                        clair) n'est demandée ou conservée pour les élèves.
                    </strong>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    5. Adresse email et identifiant technique
                </h2>
                <p>
                    Lors de l'inscription, une adresse email est demandée afin
                    de générer un identifiant technique unique. Cette adresse
                    email n'est pas conservée en clair et n'est pas exploitable
                    pour vous contacter. Elle sert uniquement à garantir
                    l'unicité du compte enseignant.
                </p>
                <p className="font-medium">
                    <strong>
                        Nous ne pouvons donc pas vous contacter par email, ni
                        retrouver votre adresse email à partir de l'identifiant.
                    </strong>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    6. Utilisation des cookies et du stockage local
                </h2>
                <p>
                    Nous utilisons des cookies ou le stockage local uniquement
                    pour&nbsp;:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-1">
                        Mémoriser vos scores, records ou préférences sur votre
                        appareil.
                    </li>
                    <li className="mb-1">
                        Permettre le fonctionnement des exercices en ligne.
                    </li>
                </ul>
                <p className="font-medium">
                    <strong>
                        Ces données ne sont jamais transmises à des tiers ni
                        utilisées à des fins publicitaires ou commerciales.
                    </strong>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    7. Qui a accès aux données&nbsp;?
                </h2>
                <p>
                    Les données saisies (pseudonymes, listes de mots, scores)
                    sont accessibles uniquement à l'utilisateur concerné et, le
                    cas échéant, à l'enseignant responsable du groupe.
                </p>
                <p>Aucun tiers n'a accès à ces données.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    8. Durée de conservation des données
                </h2>
                <p>
                    Les données liées aux comptes enseignants et aux listes de
                    mots sont conservées tant que le compte est actif.
                </p>
                <p>
                    Les scores et records sont conservés localement sur votre
                    appareil ou, pour certains exercices, sur le serveur tant
                    que le compte existe.
                </p>
                <p className="font-medium">
                    <strong>
                        Les comptes utilisateurs sont considérés comme inactifs
                        après 2 ans sans connexion. En l'absence de moyen de
                        contact, aucun avertissement ne pourra être envoyé avant
                        la suppression. À l'issue de ce délai, toutes les
                        données associées au compte sont supprimées de façon
                        sécurisée, sauf obligation légale de conservation plus
                        longue.
                    </strong>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    9. Vos droits
                </h2>
                <p>Conformément au RGPD, vous pouvez&nbsp;:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-1">Accéder à vos données</li>
                    <li className="mb-1">
                        Demander leur rectification ou leur suppression
                    </li>
                    <li className="mb-1">
                        Demander la suppression de votre compte
                    </li>
                </ul>
                <p>
                    Pour toute demande, contactez-nous à&nbsp;:
                    <a
                        href="mailto:webmaster@micetf.fr"
                        className="text-blue-600 hover:text-blue-800 ml-1"
                    >
                        webmaster@micetf.fr
                    </a>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    10. Sécurité
                </h2>
                <p>
                    Nous mettons tout en œuvre pour garantir la sécurité de vos
                    données (accès restreint, protection des comptes,
                    hébergement sécurisé chez OVH).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold text-blue-600 mb-3">
                    11. Contact et amélioration continue
                </h2>
                <div className="not-italic text-gray-600">
                    Pour toute question, suggestion ou remarque concernant la
                    confidentialité ou le respect du RGPD, contactez&nbsp;:
                    <br />
                    <a
                        href="mailto:webmaster@micetf.fr"
                        className="text-blue-600 hover:text-blue-800"
                    >
                        webmaster@micetf.fr
                    </a>
                    <br />
                    Le site est en évolution constante pour garantir le meilleur
                    niveau de respect de la vie privée et de la réglementation.
                </div>
            </section>

            <footer className="mt-8 pt-4 border-t border-gray-200 text-gray-500 text-sm">
                Dernière mise à jour&nbsp;: 26 avril 2025
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
