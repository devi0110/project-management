import { createPortal } from "react-dom"
import { forwardRef,useImperativeHandle,useRef } from "react";
import Button from "./Button";

const Modal=  forwardRef(function Modal({children},ref)
{
    const dialog=useRef();
    useImperativeHandle(ref,()=>{

        return{
            open(){
                dialog.current.showModal();
            }
        }
    });
    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-sm shadow-md">{children}
    <form className="mt-4 text-right" action="" method="dialog"><Button>close</Button></form></dialog>,document.getElementById('modal-root'));

});
export default Modal;