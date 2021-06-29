import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
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
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </SocialLink>
                    <SocialLink
                        href='https://www.facebook.com/kingaariiyoga'
                        label='Kinga Arii Yoga facebook'>
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </SocialLink>
                    <SocialLink
                        href='mailto:kingaarii@wp.pl;jmalek87@gmail.com?subject=Zapytanie o kurs'
                        label='Kinga Arii Yoga email'>
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </SocialLink>
                    <SocialLink
                        href='tel:+48731666097'
                        label='Kinga Arii Yoga phone'>
                        <FontAwesomeIcon icon={["fas", "phone-alt"]} />
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
