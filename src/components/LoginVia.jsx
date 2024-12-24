import { NavLink } from "react-router";
import Home from "./Home";

function LoginVia({logo, text}){
    return (
        <NavLink to={'home'} className='flex border border-zinc-200 w-[90%] items-center justify-center p-3 rounded-lg'>
            <img className='w-7 h-7 object-cover' src={logo} alt="" />
            <p className='px-3 font-bold'>{`Sign in With ${text}`}</p>
        </NavLink>
    );
}

export default LoginVia;