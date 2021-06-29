import * as React from "react";
import { Navigation } from "./components";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
    return (
        <header>
            <Navigation />
        </header>
    );
};

export default Header;
