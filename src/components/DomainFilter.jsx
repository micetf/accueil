import React from "react";

const DomainFilter = ({ domains, selectedDomain, onDomainChange }) => {
    const handleChange = (e) => {
        onDomainChange(e.target.value);
    };

    return (
        <div className="relative w-full">
            <select
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedDomain}
                onChange={handleChange}
            >
                <option value="">Tous les domaines</option>
                {domains.map((domain) => (
                    <option key={domain.name} value={domain.name}>
                        {domain.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DomainFilter;
