import React from 'react'

import { useState } from 'react';

function Modal({ setShowModal }) {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        console.log("Added:", inputValue);
        setShowModal(false);
        setInputValue(""); // Reset
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-xl w-[90%] max-w-md space-y-4">
                <h2 className="text-white text-lg font-semibold">Add Carps</h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type here..."
                />
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 rounded-md text-sm text-white bg-neutral-700 hover:bg-neutral-600 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 rounded-md text-sm font-medium bg-[#FEE715] text-black hover:bg-white transition"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal