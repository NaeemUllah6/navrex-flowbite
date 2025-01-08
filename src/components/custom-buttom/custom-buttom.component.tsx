
type CustomButtonProps = {
    text: string,
    buttonClassName?: string,
}

export default function CustomButton({
    text,
    buttonClassName
}: CustomButtonProps) {
    return (
        <button className={`rounded-lg bg-[#DEA25C] d-flex items-center justify-center gap-2 py-2.5 px-5 w-full text-sm font-semibold text-white leading-[21px after:first:last:] ${buttonClassName}`}>{text}</button>
    )
}
