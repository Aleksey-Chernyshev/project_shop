import { createPortal } from 'react-dom';
import './modalProduct.css';
import React, {PropsWithChildren} from 'react';


interface IModalProps {
    active: boolean;
    onSubmit?: () => void;
    onClose: () => void;
}
const ModalProduct = ({active, onClose, children}: PropsWithChildren<IModalProps>) =>{
    if (!active){
        return null;
    }
    const portalDiv = document.getElementById('modal');
    if (!portalDiv) {
        throw new Error("The element #portal wasn't found");
    }
    return createPortal (
        <dialog className="modal" onClick={onClose}>
            <div className="modal-content"
                 onClick={(event) => event.stopPropagation()}>
                <div className='modal-body'>
                    {children}
                </div>
                <button className='modal-close' onClick={onClose}>
                    X
                </button>
            </div>
        </dialog>,
        portalDiv

    )
};
export default ModalProduct;




