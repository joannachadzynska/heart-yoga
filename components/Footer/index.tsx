import React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
    return (
        <footer>
            <div className='container'>
                <small>&copy; Joanna Chądzyńska</small>
            </div>
        </footer>
    );
};

export default Footer;
