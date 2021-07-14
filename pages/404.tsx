import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

export interface Custom404Props {}

const Custom404: React.SFC<Custom404Props> = () => {
    return (
        <Layout banner='' heroIntro=''>
            <div className='container'>
                <h3>Ta przestrzeń jest pusta</h3>
                <p>Strona, której szukasz, nie istnieje (błąd 404)</p>

                <Link href='/'>Przejdź do strony głównej</Link>
            </div>
        </Layout>
    );
};

export default Custom404;
