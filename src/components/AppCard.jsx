import React, { useState } from "react";
import { ExternalLink, Code, Copy, Check } from "lucide-react";
import { getThumbnailUrl } from "../utils/thumbnailUtils";
import { BASE_URL } from "../data/constants";
import FavoriteButton from "./FavoriteButton";

const AppCard = ({ app, isFavorite, onToggleFavorite }) => {
    const [copied, setCopied] = useState(false);
    const [showEmbedCode, setShowEmbedCode] = useState(false);

    const embedCode = `<iframe src="${BASE_URL}/${app.url}" title="${app.title}" width="100%" height="600" frameborder="0"></iframe>`;

    const handleCopyCode = () => {
        navigator.clipboard.writeText(embedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const thumbnailUrl = getThumbnailUrl(app.thumbnail);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                    src={thumbnailUrl}
                    alt={app.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                        e.target.src = "/assets/placeholder.png";
                    }}
                />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800 flex-1 pr-2">
                        {app.title}
                    </h3>
                    <FavoriteButton
                        id={app.id}
                        isFavorite={isFavorite}
                        onToggle={onToggleFavorite}
                    />
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {app.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {app.keywords &&
                        app.keywords.slice(0, 3).map((keyword, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                                {keyword}
                            </span>
                        ))}
                    {app.keywords && app.keywords.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{app.keywords.length - 3}
                        </span>
                    )}
                </div>

                <div className="flex justify-between items-center">
                    <a
                        href={`${BASE_URL}/${app.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                        Visiter <ExternalLink size={16} />
                    </a>

                    <button
                        onClick={() => setShowEmbedCode(!showEmbedCode)}
                        className="text-gray-600 hover:text-gray-800 flex items-center gap-1 text-sm"
                    >
                        <Code size={16} /> Code d'intégration
                    </button>
                </div>

                {showEmbedCode && (
                    <div className="mt-4 p-3 bg-gray-100 rounded-md relative">
                        <pre className="text-xs overflow-auto whitespace-pre-wrap">
                            {embedCode}
                        </pre>
                        <button
                            onClick={handleCopyCode}
                            className="absolute top-2 right-2 p-1 bg-white rounded-md text-gray-600 hover:text-gray-900 shadow-sm"
                            title="Copier le code"
                        >
                            {copied ? (
                                <Check size={16} className="text-green-600" />
                            ) : (
                                <Copy size={16} />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppCard;
