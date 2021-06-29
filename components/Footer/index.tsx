import Link from "next/link";
import React from "react";
import {
    EmailIcon,
    FacebookLogo,
    InstagramLogo,
    PhoneIcon,
} from "./components";
import styles from "./footer.module.scss";

export interface FooterProps {}

export interface LinkProps {
    href: string;
    label?: string;
}

const SocialLink: React.FC<LinkProps> = ({ href, children, label }) => {
    return (
        <Link href={href}>
            <a
                className={styles.link}
                target='_blank'
                rel='noopener noreferrer'
                role='link'
                aria-label={label}>
                {children}
            </a>
        </Link>
    );
};

const Footer: React.SFC<FooterProps> = () => {
    return (
        <footer>
            <div className={`container ${styles.footer}`} id='contact'>
                <div className={styles.socials}>
                    <SocialLink
                        href='https://www.instagram.com/kingaariiyoga/'
                        label='Kinga Arii Yoga instagram'>
                        <InstagramLogo />
                    </SocialLink>
                    <SocialLink
                        href='https://www.facebook.com/kingaariiyoga'
                        label='Kinga Arii Yoga facebook'>
                        <FacebookLogo />
                    </SocialLink>
                    <SocialLink
                        href='mailto:kingaarii@wp.pl;jmalek87@gmail.com?subject=Zapytanie o kurs'
                        label='Kinga Arii Yoga email'>
                        <EmailIcon />
                    </SocialLink>
                    <SocialLink
                        href='tel:+48731666097'
                        label='Kinga Arii Yoga phone'>
                        <PhoneIcon />
                    </SocialLink>
                </div>
                <div className={styles.copy}>
                    <small>&copy; Joanna Chądzyńska</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
