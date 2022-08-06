import { FC } from "react";
import { PrimaryButtonContainer } from "./button.styled";

export const PrimaryButton: FC<{
    children: JSX.Element,
    onClick: () => void,
}> = ({ children, onClick, }) => {
    return (
        <PrimaryButtonContainer onClick={onClick} >{children}</PrimaryButtonContainer>
    )
};
