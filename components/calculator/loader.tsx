import React from "react";
import { motion } from "framer-motion";
import { LoaderWrapper, LoaderSegmentWrapper, LoaderSegment } from "styled/calculator";

const Loader:React.FC = () => {
    return <LoaderWrapper className="block-center">
        <LoaderSegmentWrapper>
            <LoaderSegment as={motion.div} className="block-center" layout
               animate={{
                   top: ["-10vh", "30vh"]
               }} transition={{
                   duration: 0.7,
                   repeat: Infinity
               }}/>
        </LoaderSegmentWrapper>
        <LoaderSegmentWrapper>
            <LoaderSegment as={motion.div} className="block-center" layout
               animate={{
                   top: ["-10vh", "30vh"]
               }} transition={{
                   duration: 0.7,
                   delay: 0.2,
                   repeat: Infinity
               }}/>
        </LoaderSegmentWrapper>
        <LoaderSegmentWrapper>
            <LoaderSegment as={motion.div} className="block-center" layout
               animate={{
                   top: ["-10vh", "30vh"]
               }} transition={{
                   duration: 0.7,
                   delay: 0.4,
                   repeat: Infinity
               }}/>
        </LoaderSegmentWrapper>
    </LoaderWrapper>
};

export default Loader;