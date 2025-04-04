import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="flex-1 bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {children}
            </div>
        </div>
    );
};

export default Layout;
