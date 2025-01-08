import { Label } from 'flowbite-react'

type InputWithLabelProps = {
    labelText: string;
    id: string;
    name: string;
    type: string;
    placeholder: string;
    inputClassName?: string;
    labelClassName?: string;
}

export default function InputWithLabel({
    labelText,
    id,
    name,
    type,
    placeholder,
    inputClassName = '',
    labelClassName = '',
}: InputWithLabelProps) {
    return (
        <div className="flex flex-col gap-2">
            <Label className={`text-sm font-medium text-[#111928] ${labelClassName}`} htmlFor={id}>{labelText}</Label>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                className={`px-4 py-3 text-sm text-[#6B7280] rounded-lg border-[1px] border-solid border-[#D1D5DB] bg-[#F9FAFB] ${inputClassName}`}
            />
        </div>
    )
}
