import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
    return (
        <header>
            <nav className='nav__container'>
                <div className='container nav'>
                    <Link href='/'>
                        <a>
                            <Image
                                src='/logo.png'
                                alt='kinga arii yoga logo'
                                width={70}
                                height={70}
                            />
                        </a>
                    </Link>
                    <Link href='/yoga'>
                        <a>Kursy</a>
                    </Link>
                    <Link href='/schedule'>
                        <a>Grafik</a>
                    </Link>
                    <Link href='#about-me'>
                        <a>O mnie</a>
                    </Link>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                    <Link href='#testimonials'>
                        <a>Opinie</a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
