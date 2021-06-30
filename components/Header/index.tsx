import { Page } from "@/types/page";
import * as React from "react";
import { Hero, Navigation } from "./components";

export interface HeaderProps {
    page: string;
    pageDetails?: Page | undefined;
}

const Header: React.SFC<HeaderProps> = ({ page, pageDetails }) => {
    return (
        <header>
            <Navigation />
            <Hero title={page} pageDetails={pageDetails} />
        </header>
    );
};

export default Header;
