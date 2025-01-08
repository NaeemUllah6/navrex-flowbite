
export default function PasswordResetSuccessfullyPage() {
    return (
        <div className="flex items-center justify-center h-screen px-3">
            <div className="max-w-[449px] w-full mx-auto rounded-lg bg-white p-3 md:p-6 flex flex-col items-center"
                style={{
                    boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)"
                }}
            >
                <img width="48" height="48" src="/images/authentication/tik.svg" alt="tik" />
                <h1 className="mt-6 text-center text-2xl font-bold text-[#111928]">Password Reset!</h1>
                <p className="mt-1 text-center text-sm md:text-base text-[#6B7280]">Your password has been successfully reset, click below to continue your access.</p>
            </div>
        </div>
    )
}
