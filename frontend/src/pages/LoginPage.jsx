import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors } = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    return (
        <div className="max-w-lg mx-auto md:mt-20 mt-0 grid justify-items-center">
            {
                signinErrors.map((error, i) => (
                    <div className="w-80 bg-red-500 p-3 text-white my-2" key={i}>
                        {error}
                    </div>
                ))
            }
            <form onSubmit={onSubmit} className="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-6 pb-8 flex flex-col">
                <h1 className="text-center text-black font-bold text-2xl">Login</h1>
                <div className="w-full h-full grid justify-items-center">
                    <img src="Logo FastPay (1).svg" alt="logo" className="w-20 h-20 mt-5  transform scale-150" />
                </div>
                <input
                    type="email"
                    className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-60 mt-5"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="text-red-500">Email is required</p>}
                <input
                    type="password"
                    className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-60 mt-5"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <p className="text-red-500">Password is required</p>
                )}
                <button className="shadow-md bg-blue-600 p-3 rounded-lg block w-full shadow-zinc-400 text-white font-bold mt-8 hover:bg-blue-800">Submit</button>
            </form>
            <p className="text-white">
                Don't have an account? <Link to="/register">Sign up</Link>
            </p>

        </div>
    )
}

export default LoginPage