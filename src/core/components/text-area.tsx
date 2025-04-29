import { ComponentProps } from "react";

interface SearchInputTextProps extends ComponentProps<"textarea"> {}


export function TextArea({...props}:SearchInputTextProps){

    return(
        <textarea {...props} className="p-3 scrollbar-style placeholder:text-gray-400 focus-within:bg-white border text-primary border-gray-500 rounded-sm min-h-[146px] hover:border-secondary focus:outline-none focus-within:border-primary"></textarea>
    )
}