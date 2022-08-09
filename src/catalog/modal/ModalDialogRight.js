import {
 ModalTitle,
 ModalDescriptionContainer,
 ModalDetailsContainer,
 ModalDescriptionSupplier,
 ModalDescriptionBlue,
 ModalCloseContainer,
 ModalButtonContainer,
 ModalTabsContainer,
 ModalDialogRightContainer,
} from "./modal.styled";
import CloseIcon from "@material-ui/icons/Close";
import {PrimaryButton} from "../../button/PrimaryButton";

export const ModalDialogRight = ({onClose, product}) => {
 return (
  <ModalDialogRightContainer id="ModalDialogRightContainer">
   <ModalCloseContainer id="ModalCloseContainer">
    <CloseIcon onClick={onClose} />
   </ModalCloseContainer>
   <ModalDescriptionContainer>
    <div>SKU# mat-153643 COPY</div>
    <ModalDescriptionSupplier>
     <div>Supplier:</div>
     <ModalDescriptionBlue>PL-Supplier149</ModalDescriptionBlue>
    </ModalDescriptionSupplier>
   </ModalDescriptionContainer>
   <ModalTitle>{product.title}</ModalTitle>
   <ModalButtonContainer>
    <PrimaryButton>Add To My Cart</PrimaryButton>
   </ModalButtonContainer>
   <ModalTabsContainer>
    <div>Product Details</div>
    <div>Shipping Rates</div>
   </ModalTabsContainer>
   <ModalDetailsContainer>
    <span>{product.description}</span>
   </ModalDetailsContainer>
  </ModalDialogRightContainer>
 );
};
