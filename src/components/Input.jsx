import { forwardRef } from "react";
const Input=forwardRef(function Input({label,textarea,...props},ref)
{
    const classes="w-full p-1 border-b-2 border-stone-600  bg-stone-200 rounded-sm ";
    return(
        <p className="flex flex-col gap-1 my-5 ">
            <label className=" text-stone-600 font-bold uppercase text-sm">{label}</label>
            {textarea?<textarea ref={ref} className={classes} {...props}/>:<input ref={ref} className={classes}{...props}/>}
        </p>
    )
});

export default Input;