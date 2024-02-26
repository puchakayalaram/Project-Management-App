export default function Button({children,...props}){
    return <button {...props} className="py-2 px-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600">{children}</button>
}