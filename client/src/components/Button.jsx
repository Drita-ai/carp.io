import React from 'react'

function Button({ text, onClick }) {
    return (
        <button
            className="px-4 py-2 text-sm font-medium bg-[#FEE715] text-black border border-neutral-600 rounded-md hover:bg-white transition-colors duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button