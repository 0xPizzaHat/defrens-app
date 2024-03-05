'use client'

import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import clsx from 'clsx';
import styles from "../styles/Home.module.css";


type Props = {}

export default function Navbar({}: Props) {
    const [isSideMenuOpen, setMenu] = useState(false);
    const address = useAddress();
    


    const navLinks = [ 
        { 
            label: "Mint", 
            link: "/claim" 
        },
        {
            label: "Your Collectibles",
            link: "/profile/${address}"
        },
        {
            label: "Park ↗️",
            link: "https://social.frensdegens.com"
        },
        {
            label: "FrenShop ↗️",
            link: "https://shop.frensdegens.com"
        },
        { 
            label: "Team ↗️", 
            link: "https://frensdegens.com"
        }    
    ];

    return (
        <main>
        <nav className="flex justify-between px-8 items-center py-6 lg:px-12">
            
            <div className="flex items-center gap-8">
            <section className="flex items-center gap-4">
            <RxHamburgerMenu 
                onClick={() => setMenu(true)}
                className="text-2xl cursor-pointer lg:hidden"/>
                
                {/*menu*/}
                {/*logo */}
                <Link href="/">
                <img className="w-12 cursor-pointer" src="/defrenslogo3.png" alt="Decentral Frens" />
                </Link>
                </section>

                {navLinks.map((d, i) => (
                    <Link key={i} className="hidden lg:block text-white hover:text-gray-400 font-burgerFont text-lg" href={d.link}>
                        {d.label}
                    </Link>
                    ))}

                </div>

                {/* sidebar mobile menu */}
                
                <div 
                onClick={() => setMenu(false)}
                    className={clsx(
                    "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
                    isSideMenuOpen && "translate-x-0"
                )}>

                    <section className="text-white bg-blue-700 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
                    <IoClose 
                    onClick={() => setMenu(false)}
                    className="mt-0 mb-8 text-2xl cursor-pointer"/>

                    {navLinks.map((d, i) => (
                    <Link 
                    onClick={() => setMenu(false)}
                    key={i} className="text-white hover:text-white/75 font-burgerFont text-xl" href={d.link}>
                        {d.label}
                    </Link>
                    ))}

                {/*<ConnectWallet className={styles.connectButton}/>*/}
                    
                    </section>

                </div>

            

            <section className="flex items-center gap-4">

                {/*Connect wallet button*/}
                     
                <div className={styles.connectDiv}>
                <ConnectWallet
                    
                    className={styles.connectButton}

                    modalTitle="frensdegens/"
                    modalTitleIconUrl="https://www.frensdegens.com/wp-content/uploads/2024/02/logo1.png"


                    welcomeScreen={() => {
                        return (
                            <div 
                            className={styles.containerModal}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            />
                        )
                    }}
        
                />
                </div>
            </section>

        </nav>
        </main>
    )
}