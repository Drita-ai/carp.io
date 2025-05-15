import React from 'react'

function Button({ text, onClick }) {
    return (
        <button
            className="px-4 py-2 text-sm font-medium bg-white text-black border border-neutral-600 rounded-md hover:bg-neutral-400 transition-colors duration-200"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button