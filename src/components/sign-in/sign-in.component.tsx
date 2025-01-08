import type { FC } from "react";
import InputWithLabel from "../../components/input-with-label/input-with-label.component";
import { Link } from "react-router-dom";
import CheckboxWithLabel from "../../components/checkbox-with-label/checkbox-with-label.component";
import CustomButton from "../../components/custom-buttom/custom-buttom.component";
import RightsideOfAuthForm from "../../components/rightside-of-auth/rightside-of-auth.component";

const SignInPage: FC = function () {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:h-screen">
            <RightsideOfAuthForm
                title="Understanding Minds, Transforming Lives"
                dedscription="Access a secure and seamless clinical assessment platform. More analytics. More precision."
                imgUrl="/images/authentication/logo.svg"
            />

            <div className="w-full md:w-[50%] flex items-center justify-center px-4 md:px-[72px] py-10">
                <form id="loginForm" className="max-w-[577px] w-full mx-auto">
                    <h2 className="text-xl font-bold text-[#111928]">Welcome back</h2>
                    <div className="mt-5">
                        <InputWithLabel
                            labelText="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div className="mt-5">
                        <InputWithLabel
                            labelText="Password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                        <CheckboxWithLabel
                            labelText="Remember me"
                            name="remember_me"
                            id="rememberMe"
                        />
                        <Link to="/authentication/forgot-password" className="text-sm font-medium text-[#995B2C]">Forgot password?</Link>
                    </div>
                    <div className="mt-5">
                        <CustomButton
                            text="Sign In"
                        />
                    </div>
                    <div className="mt-5">
                        <p className="text-sm font-medium text-[#111928] text-center">Don’t have an account yet? <Link className="text-[#995B2C]" to="/authentication/sign-up">Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
