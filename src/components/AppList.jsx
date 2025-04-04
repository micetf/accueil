import React from "react";
import { ExternalLink } from "lucide-react";
import { getThumbnailUrl } from "../utils/thumbnailUtils";
import { BASE_URL } from "../data/constants";

const AppList = ({ app }) => {
    const thumbnailUrl = getThumbnailUrl(app.thumbnail);

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-24 h-24 flex-shrink-0">
                    <img
                        src={thumbnailUrl}
                        alt={app.title}
                        className="w-full h-full object-cover rounded-md"
                        onError={(e) => {
                            e.target.src = "/assets/placeholder.png";
                        }}
                    />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-800">
                            {app.title}
                        </h3>
                        <a
                            href={`${BASE_URL}/${app.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                        >
                            Visiter <ExternalLink size={16} />
                        </a>
                    </div>

                    <p className="text-gray-600 mb-2">{app.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {app.keywords &&
                            app.keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                >
                                    {keyword}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppList;
