import { Footer, Header } from "components";
import type { AppProps } from "next/app";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </>
    );
}
export default MyApp;
