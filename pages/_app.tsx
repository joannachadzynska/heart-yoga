import MountTransition from "@/utils/pageTransition";
import { Footer } from "components";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "styles/globals.scss";

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
                <Component {...pageProps} />

                <Footer />
            </MountTransition>
        </AnimatePresence>
    );
}
export default MyApp;
