import React, { useState } from 'react';
import logo from "../assets/codeantai.jpg";
import chart from "../assets/pie-chart-2-fill.svg";
import LoginVia from './LoginVia';
import github from '../assets/GitHub-Symbol.png';
import gitlab from '../assets/gitlab-logo.png';
import bitbucket from '../assets/bitbucket.png';
import azure from '../assets/azure-devops.png';
import SSO from '../assets/SSO.png';

function SigninPage() {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex flex-col md:flex-row relative">
        {/* Left Side */}
        <div className="hidden lg:flex w-[50%] h-screen flex-col justify-center items-center pb-28">
            {/* First Div */}
            <div>
            <div className="flex flex-col bg-white rounded-2xl mr-5 drop-shadow-2xl">
                <div className="flex pl-3">
                <img
                    className="w-10 h-16 object-cover items-center m-1"
                    src={logo}
                    alt=""
                />
                <h3 className="text-xl font-bold py-5 pr-6">
                    AI to Detect & Autofix Bad Code
                </h3>
                </div>
                <hr />
                <div className="flex">
                <div className="px-5 py-3 mb-4">
                    <h3 className="font-bold text-center text-xl">30+</h3>
                    <p>Language Support</p>
                </div>
                <div className="px-5 py-3 mb-4">
                    <h3 className="font-bold text-center text-xl">10K+</h3>
                    <p>Developers</p>
                </div>
                <div className="px-5 py-3 mb-4">
                    <h3 className="font-bold text-center text-xl">100K+</h3>
                    <p>Hours Saved</p>
                </div>
                </div>
            </div>
            </div>

            {/* Second Div */}
            <div className="flex bg-white p-5 gap-12 rounded-2xl drop-shadow-2xl absolute top-[50%] left-[24%]">
            <div className="font-bold">
                <div className="bg-[#E6E3FE] rounded-full w-16 h-16 flex justify-center items-center">
                <img
                    className="object-cover w-7 h-7"
                    src={chart}
                    alt=""
                />
                </div>
                <p className="py-1">Issues Fixed</p>
                <h1 className="text-3xl">500K+</h1>
            </div>
            <div>
                <div className="flex text-blue-600 font-bold">
                <i className="ri-arrow-up-line"></i>
                <p className="pl-1">14%</p>
                </div>
                <p>This Week</p>
            </div>
            </div>
        </div>

        {/* Right Side */}
        <div className="w-full min-h-screen lg:w-[50%] bg-zinc-100 flex justify-center p-5 flex-col">
            <div className='p-5 h-[80%] w-[96%] bg-white rounded-2xl mt-1'>
                <div className='flex flex-col items-center px-1'>
                    <div className="flex">
                        <img
                            className="w-10 h-16 object-cover items-center m-1"
                            src={logo}
                            alt=""
                        />
                        <h3 className="text-3xl py-5 pr-6">
                            CodeAnt AI
                        </h3>
                    </div>
                    <h1 className='font-bold text-2xl pb-6'>Welcome to CodeAnt AI</h1>
                    <div className='flex place-content-evenly w-full bg-zinc-100 rounded-lg'>
                        <button onClick={() => setOpen(false)} className={`px-4 py-2 text-lg font-bold ${!open ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-500'} w-[50%] rounded-lg `}>SAAS</button>
                        <button onClick={() => setOpen(true)} className={`px-4 py-2 text-lg font-bold ${open ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-500'} w-[50%] rounded-lg `}>Self Hosted</button>
                    </div>
                </div>
                <div className="h-px bg-zinc-200 my-5"></div>
                {!open && <div className='flex flex-col items-center gap-5'>
                    <LoginVia logo={github} text={'GitHub'}/>
                    <LoginVia logo={bitbucket} text={'Bitbucket'}/>
                    <LoginVia logo={azure} text={'Azure Devops'}/>
                    <LoginVia logo={gitlab} text={'Gitlab'}/>
                </div>}
                {open && <div className='flex flex-col items-center gap-5'>
                    <LoginVia logo = {gitlab} text={'Self Hosted Gitlab'}/>
                    <LoginVia logo = {SSO} text={'Sign in with SSO'}/>
                </div>}
            </div>
            <p className='mt-5 w-full text-center text-lg mx-1'>
                By signing up you agree to the 
                <b> Privacy Policy.</b>
            </p>
        </div>
    </div>
  );
}

export default SigninPage;
