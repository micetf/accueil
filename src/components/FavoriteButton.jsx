import React from "react";
import { Heart } from "lucide-react";

/**
 * Bouton de mise en favori/retrait de favori
 * Accessible au clavier, avec aria-label dynamique
 *
 * @param {{ id: string, isFavorite: boolean, onToggle: Function }} props
 */
const FavoriteButton = ({ id, isFavorite, onToggle }) => {
    const handleClick = (e) => {
        // Empêche le déclenchement des liens parents éventuels
        e.preventDefault();
        e.stopPropagation();
        onToggle(id);
    };

    return (
        <button
            onClick={handleClick}
            aria-label={
                isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
            }
            aria-pressed={isFavorite}
            className={`
                p-1.5 rounded-full transition-all duration-200 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1
                ${
                    isFavorite
                        ? "text-red-500 hover:text-red-700 hover:bg-red-50"
                        : "text-gray-300 hover:text-red-400 hover:bg-red-50"
                }
            `}
            title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
            <Heart
                size={18}
                fill={isFavorite ? "currentColor" : "none"}
                className="transition-transform duration-200 hover:scale-110"
            />
        </button>
    );
};

export default FavoriteButton;
