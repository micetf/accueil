import { useState } from "react";
import Layout from "./components/Layout";
import AppGallery from "./components/AppGallery";
import SearchBar from "./components/SearchBar";
import DomainFilter from "./components/DomainFilter";
import FilterStats from "./components/FilterStats";
import Modal from "./components/Modal";
import HelpContent from "./components/HelpContent";
import Footer from "./components/Footer";
import useAppFilter from "./hooks/useAppFilter";
import { Navbar } from "@micetf/ui";

// Importer les données depuis les nouveaux emplacements
import { applications } from "./data/applications";
import { domains } from "./data/domains";

function App() {
    const [viewMode, setViewMode] = useState("grid"); // 'grid' ou 'list'
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDomain, setSelectedDomain] = useState("");
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

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
        setIsHelpModalOpen(true);
    };

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
                        <FilterStats
                            count={filteredApps.length}
                            totalCount={applications.length}
                            searchTerm={searchTerm}
                            selectedDomain={selectedDomain}
                            domains={domains}
                            onClearSearchTerm={() => setSearchTerm("")}
                            onClearDomain={() => setSelectedDomain("")}
                        />

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

                <Footer />
            </Layout>

            {/* Modale d'aide */}
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
