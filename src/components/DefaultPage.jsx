import img from '../assets/no-projects.png'
import Button from './Button'
export default function DefaultPage({onStartAdding})
{
    return <div className="mt-24 text-center w-2/3">
        <img src={img} alt=""  className="h-16 w-16 mx-auto object-contain "/>
        <h2 className="font-bold text-stone-700">No project selected</h2>
        <p>get started by adding a new project</p>
        <p ><Button onClick={onStartAdding} children="add new project"/></p>
    </div>

}