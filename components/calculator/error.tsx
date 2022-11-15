import React from "react";
import { ErrorContainer, ErrorHeader, ErrorMessage } from "styled/calculator/error";
import { LandingPageButton } from "styled/landingPage";

interface ErrorComponent {
    errorTitle: string,
    children: JSX.Element | string | string[],
    resetTheCalculator: () => void,
}

const ErrorComponent:React.FC<ErrorComponent> = ({errorTitle, children, resetTheCalculator}:ErrorComponent) => {
    return <ErrorContainer className="block-center">
        <ErrorHeader className="block-center">
            {errorTitle}
        </ErrorHeader>
        <ErrorMessage className="block-center">
            {children}
        </ErrorMessage>
        <LandingPageButton className="block-center" onClick={() => resetTheCalculator()} type="button" topPos={6}>
            Calculate again
        </LandingPageButton>
    </ErrorContainer>
};

export default ErrorComponent;