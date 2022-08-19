import { FC } from "react";
import { ButtonContainer } from "./button.styled";

export const PrimaryButton: FC<{
    children: JSX.Element,
    onClick: () => void,
    type?: "button" | "submit" | "reset" | undefined
}> = ({ children, onClick, type }) => {
    return (
        <ButtonContainer onClick={onClick} type={type} >{children}</ButtonContainer>
    )
};
