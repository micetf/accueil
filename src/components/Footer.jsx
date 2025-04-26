// src/components/Footer.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    return (
        <>
            <footer className="mt-12 py-6 border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            Catalogue d'applications pédagogiques -{" "}
                            {new Date().getFullYear()}
                        </p>
                        <div className="mt-4 md:mt-0">
                            <button
                                onClick={() => setIsPrivacyModalOpen(true)}
                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:underline"
                            >
                                Politique de confidentialité
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <Modal
                isOpen={isPrivacyModalOpen}
                onClose={() => setIsPrivacyModalOpen(false)}
                title="Politique de confidentialité"
            >
                <PrivacyPolicy />
            </Modal>
        </>
    );
};

export default Footer;
