import Input from './Input';
import {useRef} from 'react';
import Modal from './Modal';

export default function NewProject({onAdd,onCancel}){
    const Title=useRef();
    const Description=useRef();
    const DueDate=useRef();
    const modal=useRef();

    function handleSave(){
        const EnteredTitle=Title.current.value;
        const EnteredDescription=Description.current.value;
        const EnteredDueDate=DueDate.current.value;
        if(EnteredTitle.trim()==='' || EnteredDescription.trim()==='' || EnteredDueDate.trim()===''){
            modal.current.open();
            return;
        }
        onAdd({
            title:EnteredTitle,
            description:EnteredDescription,
            dueDate:EnteredDueDate
        })
    }

    return <>
    <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-500 mb-4">OOPs</p>
        <p className="text-stone-500 mb-4">Please Check the Inputs Once</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex gap-4 items-center justify-end my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
            <li><button onClick={handleSave} className=' py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
        </menu>
        <div>
            <Input ref={Title} label="Title"/>
            <Input ref={Description} label="Description" textarea/>
            <Input ref={DueDate} type="date" label="Due Date"/>
        </div>
    </div></>
}