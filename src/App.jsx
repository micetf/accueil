import { useState } from "react";
import Layout from "./components/Layout";
import AppGallery from "./components/AppGallery";
import SearchBar from "./components/SearchBar";
import DomainFilter from "./components/DomainFilter";
import useAppFilter from "./hooks/useAppFilter";
import { Navbar } from "@micetf/ui";

// Importer les données depuis les nouveaux emplacements
import { applications } from "./data/applications";
import { domains } from "./data/domains";

function App() {
    const [viewMode, setViewMode] = useState("grid"); // 'grid' ou 'list'
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("");

    const filteredApps = useAppFilter(applications, searchTerm, selectedDomain);

    const handleViewModeChange = (mode) => {
        setViewMode(mode);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleDomainChange = (domain) => {
        setSelectedDomain(domain);
    };

    const handleShowHelp = () => {
        alert(
            "Bienvenue sur MiCetF !\n\nUtilisez la barre de recherche pour trouver des applications par mot-clé.\nFiltrez par domaine thématique avec le menu déroulant.\nChoisissez l'affichage en vignettes ou en liste selon vos préférences."
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                breadcrumb={["MiCetF", "Accueil"]}
                subtitle="Des outils pour la classe"
                showHelp={true}
                onHelpClick={handleShowHelp}
            />

            <Layout>
                <header className="mb-8 mt-20">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="w-full md:w-1/2">
                            <SearchBar onSearch={handleSearch} />
                        </div>
                        <div className="w-full md:w-1/2">
                            <DomainFilter
                                domains={domains}
                                selectedDomain={selectedDomain}
                                onDomainChange={handleDomainChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <div className="inline-flex shadow-sm rounded-md">
                            <button
                                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                                    viewMode === "grid"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                                onClick={() => handleViewModeChange("grid")}
                            >
                                Vignettes
                            </button>
                            <button
                                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                                    viewMode === "list"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-50"
                                }`}
                                onClick={() => handleViewModeChange("list")}
                            >
                                Liste
                            </button>
                        </div>
                    </div>
                </header>

                <main>
                    <AppGallery
                        applications={filteredApps}
                        viewMode={viewMode}
                    />
                </main>

                <footer className="mt-12 text-center text-gray-500 text-sm">
                    <p>
                        Catalogue d'applications pédagogiques -{" "}
                        {new Date().getFullYear()}
                    </p>
                </footer>
            </Layout>
        </div>
    );
}

export default App;
