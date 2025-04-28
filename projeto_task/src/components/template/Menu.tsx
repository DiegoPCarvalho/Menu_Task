'use client'

import { useState } from "react"
import { motion } from 'framer-motion';

export default function Menu() {

    const [menu, setMenu] = useState(false)

    function mudarMenu() {
        setMenu(!menu)
    }

    return (
        <div className={`${menu ? "w-16 transition-all duration-500 easy-linear hover:w-40" : "w-40 transition-all duration-500 easy-linear"}`}>

            <button
                onClick={mudarMenu}
                className="flex flex-col items-center justify-center w-10 h-10 gap-1 group"
            >
                <svg
                    viewBox="0 0 24 24"
                    className={`w-8 h-8 transition-transform duration-300 transform ${menu ? 'rotate-0' : 'rotate-90'
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Linha de cima */}
                    <line
                        x1="3"
                        y1="6"
                        x2="21"
                        y2="6"
                        className={`transition-all duration-300 ${menu ? 'opacity-0' : 'opacity-100'
                            }`}
                    />
                    {/* Linha do meio */}
                    <line
                        x1="3"
                        y1="12"
                        x2="21"
                        y2="12"
                        className={`transition-all duration-300 ${menu ? 'opacity-0' : 'opacity-100'
                            }`}
                    />
                    {/* Linha de baixo */}
                    <line
                        x1="3"
                        y1="18"
                        x2="21"
                        y2="18"
                        className={`transition-all duration-300 ${menu ? 'opacity-0' : 'opacity-100'
                            }`}
                    />
                    {/* Seta para a direita (formando a ponta) */}
                    <line
                        x1="13"
                        y1="6"
                        x2="19"
                        y2="12"
                        className={`transition-all duration-300 ${menu ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                    <line
                        x1="19"
                        y1="12"
                        x2="13"
                        y2="18"
                        className={`transition-all duration-300 ${menu ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                </svg>
            </button>
            <div>
                logo
            </div>
            <div>
                menu
            </div>
        </div>
    )
}