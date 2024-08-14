'use client'
import React, { useState, useRef, useEffect } from 'react';
import { createPopper, placements } from '@popperjs/core';
import { useClickAway } from 'react-use';

const ParagraphSelect = ({ options, onSelect, placeholder = 'Digite uma mensagem', selectedOption, handleKeyDown }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);
    const popperRef = useRef(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: any) => {
        setIsOpen(false);
        onSelect(option); // Pass the selected option to the parent component
    };

    useClickAway(selectRef, () => {
        setIsOpen(false);
    });

    useEffect(() => {
        const instance = createPopper(selectRef.current as any, popperRef.current as any, {
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        boundariesElement: 'viewport',
                        placements: "top"
                    },
                },
            ],
        });

        return () => instance.destroy();
    }, []);
    function handleFocus() {
        const sendInput = document.getElementById('send');
        sendInput?.focus();
    }
    return (
        <div ref={selectRef} className="flex w-full" onKeyDown={handleKeyDown}>
            <input
                id='send'
                type="text"
                className="bg-gray-darkest w-full h-16 rounded-xl px-4 !appearance-none cursor-pointer"
                readOnly
                value={selectedOption || placeholder}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
            />
            {isOpen && (
                <div onKeyDown={handleKeyDown} ref={popperRef} className="absolute -translate-y-full top-full left-0 w-full bg-gray-middle shadow-md rounded-md overflow-y-auto max-h-60 z-50">
                    {options.map((option: any) => (
                        <button onKeyDown={handleKeyDown} key={option} className="w-full p-4 hover:bg-gray-darker" onClick={() => { handleSelect(option); handleFocus() }}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ParagraphSelect;