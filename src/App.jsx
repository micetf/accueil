import { useState, useMemo } from "react";
import { Heart } from "lucide-react";
import Layout from "./components/Layout";
import AppGallery from "./components/AppGallery";
import SearchBar from "./components/SearchBar";
import DomainFilter from "./components/DomainFilter";
import FilterStats from "./components/FilterStats";
import Modal from "./components/Modal";
import HelpContent from "./components/HelpContent";
import Footer from "./components/Footer";
import useAppFilter from "./hooks/useAppFilter";
import useFavorites from "./hooks/useFavorites";
import { Navbar } from "@micetf/ui";

import { applications } from "./data/applications";
import { domains } from "./data/domains";

function App() {
    const [viewMode, setViewMode] = useState("grid");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("");
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    // Filtre par recherche + domaine
    const filteredBySearchAndDomain = useAppFilter(
        applications,
        searchTerm,
        selectedDomain
    );

    // Filtre supplémentaire favoris (appliqué après les autres)
    const filteredApps = useMemo(() => {
        if (!showFavoritesOnly) return filteredBySearchAndDomain;
        return filteredBySearchAndDomain.filter((app) =>
            favorites.includes(app.id)
        );
    }, [filteredBySearchAndDomain, showFavoritesOnly, favorites]);

    const handleViewModeChange = (mode) => setViewMode(mode);
    const handleSearch = (term) => setSearchTerm(term);
    const handleDomainChange = (domain) => setSelectedDomain(domain);
    const handleShowHelp = () => setIsHelpModalOpen(true);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                breadcrumb={["MiCetF", "Accueil"]}
                subtitle="Des outils pour la classe"
                showHelp={true}
                onHelpClick={handleShowHelp}
                showSearch={false}
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

                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3">
                            <FilterStats
                                count={filteredApps.length}
                                totalCount={applications.length}
                                searchTerm={searchTerm}
                                selectedDomain={selectedDomain}
                                domains={domains}
                                onClearSearchTerm={() => setSearchTerm("")}
                                onClearDomain={() => setSelectedDomain("")}
                            />
                            {/* Bouton Mes favoris */}
                            <button
                                onClick={() =>
                                    setShowFavoritesOnly((prev) => !prev)
                                }
                                aria-pressed={showFavoritesOnly}
                                className={`
                                    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                                    border transition-all duration-200 focus:outline-none
                                    focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1
                                    ${
                                        showFavoritesOnly
                                            ? "bg-red-50 border-red-300 text-red-600"
                                            : "bg-white border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-400"
                                    }
                                `}
                                title={
                                    showFavoritesOnly
                                        ? "Afficher toutes les applications"
                                        : "Afficher uniquement mes favoris"
                                }
                            >
                                <Heart
                                    size={14}
                                    fill={
                                        showFavoritesOnly
                                            ? "currentColor"
                                            : "none"
                                    }
                                />
                                Mes favoris
                                {favorites.length > 0 && (
                                    <span
                                        className={`
                                            ml-0.5 px-1.5 py-0.5 rounded-full text-xs font-semibold
                                            ${
                                                showFavoritesOnly
                                                    ? "bg-red-100 text-red-700"
                                                    : "bg-gray-100 text-gray-500"
                                            }
                                        `}
                                    >
                                        {favorites.length}
                                    </span>
                                )}
                            </button>
                        </div>

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
                        isFavorite={isFavorite}
                        onToggleFavorite={toggleFavorite}
                        showFavoritesOnly={showFavoritesOnly}
                    />
                </main>

                <Footer />
            </Layout>

            <Modal
                isOpen={isHelpModalOpen}
                onClose={() => setIsHelpModalOpen(false)}
                title="Aide - Comment utiliser ce catalogue"
            >
                <HelpContent />
            </Modal>
        </div>
    );
}

export default App;
