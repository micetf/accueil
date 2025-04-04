import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearchTerm("");
        onSearch("");
    };

    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
                type="text"
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Rechercher une application..."
                value={searchTerm}
                onChange={handleChange}
            />
            {searchTerm && (
                <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    onClick={handleClear}
                    aria-label="Effacer la recherche"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
