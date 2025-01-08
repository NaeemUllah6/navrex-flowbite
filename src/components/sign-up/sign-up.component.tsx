import { Link } from "react-router-dom";
import CheckboxWithLabel from "../checkbox-with-label/checkbox-with-label.component";
import InputWithLabel from "../input-with-label/input-with-label.component";
import RightsideOfAuthForm from "../rightside-of-auth/rightside-of-auth.component";
import CustomButton from "../custom-buttom/custom-buttom.component";
import CountrySelector from "./components/country-selector.component";

export default function SignUpPage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:h-screen">
            <RightsideOfAuthForm
                title="Understanding Minds, Transforming Lives"
                dedscription="Access a secure and seamless clinical assessment platform. More analytics. More precision."
                imgUrl="/images/authentication/logo.svg"
            />

            <div className="w-full md:w-[50%] flex items-center justify-center px-4 md:px-[72px] py-10">
                <form id="loginForm" className="max-w-[577px] w-full mx-auto">
                    <h2 className="text-xl font-bold text-[#111928]">Create your account.</h2>
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
                            labelText="Full Name"
                            id="fullName"
                            name="full_name"
                            type="text"
                            placeholder="e.g. Bonnie Green"
                        />
                    </div>
                    <div className="mt-5">
                        <CountrySelector

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
                    <div className="mt-5">
                        <CustomButton
                            text="Sign Up"
                        />
                    </div>
                    <div className="mt-5">
                        <p className="text-sm font-medium text-[#111928] text-center">Already have an account? <Link className="text-[#995B2C]" to="/authentication/sign-in">Login here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
