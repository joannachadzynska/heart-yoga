import Image from "next/image";
import Link from "next/link";
import React from "react";
export interface LogoProps {}

const Logo: React.SFC<LogoProps> = () => {
    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href='/'>
            <Image
                src='/logo.png'
                alt='kinga arii yoga logo'
                width={70}
                height={70}
            />
        </Link>
    );
};

export default Logo;
