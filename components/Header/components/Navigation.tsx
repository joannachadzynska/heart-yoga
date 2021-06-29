/* eslint-disable @next/next/link-passhref */
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "hooks";
import React, { useRef } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

export interface NavigationProps {}

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 250px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 250px 45px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Path = (props: any) => (
    <motion.path
        strokeWidth='3'
        fill='transparent'
        stroke='hsl(0,0%, 18%)'
        strokeLinecap='round'
        {...props}
    />
);

const Navigation: React.SFC<NavigationProps> = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef<HTMLHtmlElement>(null);
    const { height } = useDimensions(containerRef);
    return (
        <div className='nav'>
            <motion.nav
                className='nav__container container'
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}>
                <Logo />

                <motion.div
                    className='nav__toggle-background'
                    variants={sidebar}></motion.div>

                <Navbar />

                <motion.button
                    className='nav__btn-toggle-menu'
                    onClick={() => toggleOpen()}>
                    <svg width='23' height='23' viewBox='0 0 23 23'>
                        <Path
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" },
                            }}
                        />
                        <Path
                            d='M 2 9.423 L 20 9.423'
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 },
                            }}
                            transition={{ duration: 0.1 }}
                        />
                        <Path
                            variants={{
                                closed: { d: "M 2 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" },
                            }}
                        />
                    </svg>
                </motion.button>
            </motion.nav>
        </div>
    );
};

export default Navigation;
