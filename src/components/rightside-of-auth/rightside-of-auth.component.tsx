import { Link } from "react-router-dom"

type RightsideOfAuthProps = {
    title: string,
    dedscription: string,
    imgUrl?: string,
    bgImageUrl?: string,
}
export default function RightsideOfAuthForm({
    title,
    dedscription,
    imgUrl = '',
    bgImageUrl = ''
}: RightsideOfAuthProps) {
    return (
        <div className="w-full md:w-[50%] h-full overflow-hidden flex items-center justify-center px-4 md:px-[72px] py-10 relative"
            style={{
                backgroundImage: bgImageUrl ? `url('${bgImageUrl}')` : "url('/images/authentication/login-img.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="max-w-[577px] w-full mx-auto pb-14 md:pb-0">
                {imgUrl &&
                    <Link to="/">
                        <img src="/images/authentication/logo.svg" alt="logo" />
                    </Link>
                }
                <h1 className="mt-8 text-xl md:text-4xl font-extrabold text-white">{title}</h1>
                <p className="mt-3 text-sm md:text-base text-white">{dedscription}</p>

            </div>
            <p className="absolute text-center text-sm text-[#F9FAFB] bottom-5 md:bottom-12">© 2025 NAVREX, LLC. All rights reserved.</p>
        </div>
    )
}
