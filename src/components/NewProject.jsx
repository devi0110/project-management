import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";

export default function NewProject({onAdd,onCancel}) {
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const modal=useRef();

    function handleSave()
    {
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;

        if(enteredTitle.trim()===''||enteredDescription.trim()===''||enteredDueDate.trim()===''){
            modal.current.open();
            return;
            
            }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        });
    }

    return(
        <>
        <Modal ref={modal}>
        <h2 className="font-bold mx-2">invalid input</h2>
        <p>enter proper details for wvery firld</p>
        </Modal>
       <div className=" w-[35rem]  mt-16">

        <menu className="flex items-center justify-end gap-6 my-16">
        <li><button onClick={onCancel}> cancel</button></li>
        <li><button onClick={handleSave} className="px-6 py-3 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-500" >save</button></li>
        </menu>

        <div>
            <Input ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="due date"/>
        </div>

    </div>
    </>

)}