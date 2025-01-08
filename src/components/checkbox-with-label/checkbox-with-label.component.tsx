import { Label } from 'flowbite-react'

type CheckboxWithLabelProps = {
    labelText: string,
    name: string,
    id: string,
    inputClassName?: string,
    labelClassName?: string,
}

export default function CheckboxWithLabel({
    labelText,
    name,
    id,
    inputClassName = '',
    labelClassName = '',
}: CheckboxWithLabelProps) {
    return (
        <div className='flex items-center gap-2'>
            <input
                id={id}
                name={name}
                type="checkbox"
                className={`rounded w-4 h-4 border-[0.5px] border-solid border-[#D1D5DB] bg-[#F9FAFB] ${inputClassName}`}
            />
            <Label className={`text-sm font-medium text-[#6B7280] ${labelClassName}`} htmlFor={id}>{labelText}</Label>
        </div>
    )
}
