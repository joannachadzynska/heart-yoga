/* eslint-disable @next/next/link-passhref */
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface NavigationProps {}

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

interface LinkProps {
    href: string;
}

export const AnimatedLink: React.FC<LinkProps> = ({ href, children }) => {
    const router = useRouter();
    const variantsItem = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };

    return (
        <Link href={href}>
            <motion.a
                className={
                    router.asPath === href
                        ? "nav__link active__link"
                        : "nav__link"
                }
                variants={variantsItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                {children}
            </motion.a>
        </Link>
    );
};

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <motion.div className='container nav__group' variants={variants}>
            <AnimatedLink href='/yoga-courses'>Kursy</AnimatedLink>
            <AnimatedLink href='/schedule'>Grafik</AnimatedLink>
            <AnimatedLink href='/blog'>Blog</AnimatedLink>
            <AnimatedLink href='#contact'>Kontakt</AnimatedLink>
        </motion.div>
    );
};

export default Navbar;
