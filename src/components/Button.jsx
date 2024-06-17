export default function Button({children,...props})
{
    return <button className=" my-4 px-4 py-3 rounded-md bg-stone-900 text-stone-50 hover:bg-stone-500" {...props}>{children}</button>
}