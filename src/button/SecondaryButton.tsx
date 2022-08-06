import { FC } from "react";
import { SecondaryButtonContainer } from "./button.styled";

export const SecondaryButton: FC<{
    children: JSX.Element,
    onClick: () => void
}> = ({ children, onClick }) => {
    return <SecondaryButtonContainer onClick={onClick}>{children}</SecondaryButtonContainer>;
};
