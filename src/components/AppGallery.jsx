import React from "react";
import AppCard from "./AppCard";
import AppList from "./AppList";

const AppGallery = ({ applications, viewMode }) => {
    if (applications.length === 0) {
        return (
            <div className="text-center py-16">
                <h3 className="text-lg font-medium text-gray-900">
                    Aucune application trouvée
                </h3>
                <p className="mt-1 text-gray-500">
                    Essayez de modifier vos critères de recherche.
                </p>
            </div>
        );
    }

    return (
        <div>
            {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {applications.map((app) => (
                        <AppList key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AppGallery;
