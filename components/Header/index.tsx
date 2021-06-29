import * as React from "react";
import { Hero, Navigation } from "./components";

export interface HeaderProps {
    page?: string;
}

const Header: React.SFC<HeaderProps> = ({ page }) => {
    return (
        <header>
            <Navigation />
            <Hero page={page} />
        </header>
    );
};

export default Header;
