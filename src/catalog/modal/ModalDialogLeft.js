import {
 ModalDialogLeftContainer,
 ModalImageContainer,
 ModalItem,
 ModalPriceContaner,
 ModalItemGrey,
 ModalItemBlue,
 ModalItemDarkBlue,
} from "./modal.styled";

export const ModalDialogLeft = ({product}) => {
 return (
  <ModalDialogLeftContainer id="ModalDialogLeftContainer">
   <ModalPriceContaner id="ModalPriceContaner">
    <ModalItem>
     <ModalItemDarkBlue>${product.price}</ModalItemDarkBlue>
     <ModalItemGrey>RRP</ModalItemGrey>
    </ModalItem>
    <ModalItem>
     <ModalItemDarkBlue>${product.price}</ModalItemDarkBlue>
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
