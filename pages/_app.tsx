import type { AppProps } from "next/app";
import Link from "next/link";
import "styles/globals.scss";
import utilsStyles from "../styles/utils.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <nav>
                <div className={utilsStyles.container}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </div>
            </nav>
            <main>
                <Component {...pageProps} />
            </main>

            <footer>
                <div className={utilsStyles.container}>
                    <small>&copy; Joanna Chądzyńska</small>
                </div>
            </footer>
        </>
    );
}
export default MyApp;
