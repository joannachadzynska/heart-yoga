import * as React from "react";
import { Hero, Navigation } from "./components";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
    return (
        <header>
            <Navigation />
            <Hero />
        </header>
    );
};

export default Header;
