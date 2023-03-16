import React from "react";

import { ContactHeader, ContactContainer, ContactWrapper } from "styled/contact";

const Contact:React.FC = () => {
    return <>
        <ContactHeader className="block-center">
            Contact
        </ContactHeader>
        <ContactContainer className="block-center">
            <ContactWrapper className="block-center">
                Main contact - {process.env.NEXT_PUBLIC_MAIN_CONTACT}
            </ContactWrapper>
            <ContactWrapper className="block-center">
                Dev contact - {process.env.NEXT_PUBLIC_DEV_CONTACT}
            </ContactWrapper>
        </ContactContainer>
    </>
};

export default Contact;
