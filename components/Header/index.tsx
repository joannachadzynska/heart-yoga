import * as React from "react";
import { Hero, Navigation } from "./components";

export interface HeaderProps {
    page?: string;
    banner: string;
    heroIntro: string;
}

const Header: React.SFC<HeaderProps> = ({ page, banner, heroIntro }) => {
    return (
        <header>
            <Navigation />
            <Hero title={page} banner={banner} heroIntro={heroIntro} />
        </header>
    );
};

export default Header;
