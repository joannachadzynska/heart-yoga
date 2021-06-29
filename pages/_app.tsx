import MountTransition from "@/utils/pageTransition";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Footer, Header } from "components";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "styles/globals.scss";

library.add(fab, fas);

function MyApp({ Component, pageProps, router }: AppProps) {
    // The handler to smoothly scroll the element into view
    const handleExitComplete = (): void => {
        if (typeof window !== "undefined") {
            // Get the hash from the url
            const hashId = window.location.hash;

            if (hashId) {
                // Use the hash to find the first element with that id
                const element = document.querySelector(hashId);

                if (element) {
                    // Smooth scroll to that elment
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                    });
                }
            }
        }
    };
    return (
        <AnimatePresence
            exitBeforeEnter
            onExitComplete={handleExitComplete}
            initial={false}>
            <MountTransition routeKey={router.route} slideUp={0} slide={30}>
                <Header />

                <main>
                    <Component {...pageProps} />
                </main>

                <Footer />
            </MountTransition>
        </AnimatePresence>
    );
}
export default MyApp;
