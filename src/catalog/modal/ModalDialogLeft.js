import {
 ModalDialogLeftContainer,
 ModalImageContainer,
 ModalItem,
 ModalPriceContaner,
 ModalItemGrey,
 ModalItemBlue,
} from "./modal.styled";

export const ModalDialogLeft = ({product}) => {
 return (
  <ModalDialogLeftContainer>
   <ModalPriceContaner>
    <ModalItem>
     <strong>${product.price}</strong>
     <ModalItemGrey>RRP</ModalItemGrey>
    </ModalItem>
    <ModalItem>
     <strong>${product.price}</strong>
     <ModalItemGrey>COST</ModalItemGrey>
    </ModalItem>
    <ModalItem>
     <ModalItemBlue>${product.price}</ModalItemBlue>
     <ModalItemGrey>PROFIT</ModalItemGrey>
    </ModalItem>
   </ModalPriceContaner>
   <ModalImageContainer>
    <img src={product.image} alt={product.image} />
   </ModalImageContainer>
  </ModalDialogLeftContainer>
 );
};
