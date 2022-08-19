import { FC } from "react";
import { ButtonContainer } from "./button.styled";

export const SecondaryButton: FC<{
    children: JSX.Element,
    onClick: () => void
}> = ({ children, onClick }) => {
    return <ButtonContainer onClick={onClick} isSecondary>{children}</ButtonContainer>;
};
