import {ModalDialogContainer} from "./modal.styled";
import {ModalDialogLeft} from "./ModalDialogLeft";
import {ModalDialogRight} from "./ModalDialogRight";

export const ModalDialog = ({product, onClose}) => {
 return (
  <ModalDialogContainer>
   <ModalDialogLeft product={product} />
   <ModalDialogRight product={product} onClose={onClose} />
  </ModalDialogContainer>
 );
};
