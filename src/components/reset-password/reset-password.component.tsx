import type { FC } from "react";
import RightsideOfAuthForm from "../rightside-of-auth/rightside-of-auth.component";
import InputWithLabel from "../input-with-label/input-with-label.component";
import CustomButton from "../custom-buttom/custom-buttom.component";
import { Link } from "react-router-dom";

const ResetPasswordPage: FC = function () {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:h-screen">
            <RightsideOfAuthForm
                title="Understanding Minds, Transforming Lives"
                dedscription="Access a secure and seamless clinical assessment platform. More analytics. More precision."
                bgImageUrl="/images/authentication/forgot-password-img.webp"
            />

            <div className="w-full md:w-[50%] flex items-center justify-center px-4 md:px-[72px] py-10">
                <form id="loginForm" className="max-w-[577px] w-full mx-auto">
                    <Link to="/">
                        <img width="189" height="48" src="/images/authentication/logo.svg" alt="logo" />
                    </Link>
                    <h2 className="text-xl font-bold text-[#111928] mt-6">Create new password</h2>
                    <p className="mt-1 text-sm md:text-base text-[#6B7280]">Your new password must be different from previous used passwords.</p>
                    <div className="mt-4">
                        <InputWithLabel
                            labelText="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mt-4">
                        <InputWithLabel
                            labelText="New Password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="mt-4">
                        <InputWithLabel
                            labelText="Confirm Password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div className="mt-6">
                        <CustomButton
                            text="Reset password"
                        />
                    </div>
                    <div className="mt-5">
                        <Link className="flex items-center gap-3 w-fit mx-auto" to="/authentication/sign-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <g clip-path="url(#clip0_379_1227)">
                                    <path d="M13.5001 5.96206H3.9146L6.20747 3.55489C6.30297 3.45805 6.37915 3.34221 6.43156 3.21413C6.48396 3.08606 6.51155 2.9483 6.5127 2.80891C6.51385 2.66952 6.48855 2.53129 6.43827 2.40227C6.388 2.27326 6.31375 2.15604 6.21986 2.05748C6.12597 1.95891 6.01433 1.88096 5.89144 1.82817C5.76855 1.77539 5.63688 1.74883 5.50411 1.75004C5.37133 1.75125 5.24012 1.78021 5.11812 1.83523C4.99613 1.89025 4.88579 1.97022 4.79355 2.07049L0.793771 6.26965C0.70065 6.36717 0.626768 6.48301 0.576358 6.61055C0.525948 6.73809 0.5 6.87482 0.5 7.0129C0.5 7.15098 0.525948 7.28771 0.576358 7.41525C0.626768 7.54279 0.70065 7.65864 0.793771 7.75615L4.79355 11.9553C4.98214 12.1465 5.23472 12.2524 5.49691 12.25C5.75909 12.2476 6.00989 12.1372 6.19529 11.9425C6.38068 11.7479 6.48585 11.4846 6.48812 11.2093C6.4904 10.9341 6.38961 10.6689 6.20747 10.4709L3.9146 8.06164H13.5001C13.7653 8.06164 14.0196 7.95104 14.2071 7.75416C14.3946 7.55729 14.5 7.29027 14.5 7.01185C14.5 6.73343 14.3946 6.46641 14.2071 6.26954C14.0196 6.07266 13.7653 5.96206 13.5001 5.96206Z" fill="#111928" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_379_1227">
                                        <rect width="14" height="14" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-sm text-[#111928] font-medium">Return to the login screen</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
