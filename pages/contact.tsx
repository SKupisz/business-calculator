import React from "react";

import { ContactHeader, ContactContainer, ContactWrapper } from "styled/contact";

const Contact:React.FC = () => {
    return <>
        <ContactHeader className="block-center">
            Contact
        </ContactHeader>
        <ContactContainer className="block-center">
            <ContactWrapper className="block-center">
                Contact 1 - something@something.com
            </ContactWrapper>
            <ContactWrapper className="block-center">
                Contact 2 - something@something.com
            </ContactWrapper>
            <ContactWrapper className="block-center">
                Contact 3 - something@something.com
            </ContactWrapper>
        </ContactContainer>
    </>
};

export default Contact;
