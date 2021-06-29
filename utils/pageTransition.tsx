import { motion } from "framer-motion";
import { FC } from "react";

interface Props {
    routeKey?: any;
    slide?: number;
    slideUp?: number;
    key2?: any;
}

const MountTransition: FC<Props> = ({
    slide = 0,
    slideUp = 0,
    children,
    routeKey,
}) => (
    <motion.div
        className='root-transition'
        key={routeKey}
        exit={{ opacity: 0, x: slide, y: slideUp, overflow: "hidden" }}
        initial={{
            opacity: 0,
            x: slide,
            y: slideUp,
            overflow: "hidden",
        }}
        animate={{
            opacity: 1,
            x: 0,
            y: 0,
            overflow: "visible",
        }}
        transition={{
            ease: "easeInOut",
            delay: 0.5,
            duration: 0.5,
        }}>
        {children}
    </motion.div>
);

export default MountTransition;
