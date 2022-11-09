import React from "react";
import Link from "next/link";

import { Error404Header, Error404Info } from "styled/404";
import { LandingPageButton } from "styled/landingPage";

const Error404:React.FC = () => {
    return <>
        <Error404Header className="block-center">
            Oops!...
        </Error404Header>
        <Error404Info className="block-center">
            It seems the page you are looking for  does not exist
        </Error404Info>
        <Link href="/">
            <LandingPageButton type="button" className="block-center" topPos={12}>
                Main calculator
            </LandingPageButton>
        </Link>
        <Link href="/calculator">
            <LandingPageButton type="button" className="block-center" topPos={13}>
                Calculator
            </LandingPageButton>
        </Link>
        <Link href="/contact">
            <LandingPageButton type="button" className="block-center" topPos={14}>
                Contact
            </LandingPageButton>
        </Link>
    </>
};

export default Error404;
