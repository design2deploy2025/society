import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-white max-w-96 md:p-6 p-4 text-left text-sm shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="size-medium font-semibold mb-6 text-center">Login</h2>
                <label htmlFor="email" className="size-very-small">Email</label>
                <input id="email" className="w-full border mt-1 mb-5 outline-none py-2.5 px-4" type="email" placeholder="Enter your email" />

                <label htmlFor="password" className="size-very-small">Password</label>
                <input id="email" className="w-full border mt-1 outline-none py-2.5 px-4" type="email" placeholder="Enter your password" />
                <button type="button" className="w-full my-3 bg-(--light-blue) active:scale-95 transition py-2.5 text-white size-very-small cursor-pointer">Login</button>
                <p className="text-center mt-4">Don't have an account? <Link to="/signup"><span className="text-(--light-blue) underline">Signup Now</span></Link></p>
            </div>
        </div>
    );
};