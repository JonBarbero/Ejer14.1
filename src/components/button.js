import React from "react";
//stateless functional components 
export const Button =({onClick, className = '', children} )=>{
    return (
        <button
            onClick={onClick}
            className={className}
            type="button"
        >{children}
        </button>
    );
}
