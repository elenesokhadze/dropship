import ReactDom from "react-dom";
import {ModalContainer, OverlayContainer} from "./modal.styled";
import {ModalDialog} from "./ModalDialog";

const Modal = ({children, onClose, product}) => {
 return ReactDom.createPortal(
  <>
   <OverlayContainer />
   <ModalContainer>
    <ModalDialog product={product} onClose={onClose} />
   </ModalContainer>
   {children}
  </>,
  document.getElementById("root")
 );
};

export default Modal;
