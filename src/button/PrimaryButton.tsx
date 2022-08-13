import { FC } from "react";
import { PrimaryButtonContainer } from "./button.styled";

export const PrimaryButton: FC<{
    children: JSX.Element,
    onClick: () => void,
    type?: "button" | "submit" | "reset" | undefined
}> = ({ children, onClick, type }) => {
    return (
        <PrimaryButtonContainer onClick={onClick} type={type} >{children}</PrimaryButtonContainer>
    )
};
