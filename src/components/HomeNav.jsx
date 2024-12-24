import React from "react";

function HomeNav({ logo, text, num, check, onClick }) {
    return (
        <button 
            onClick={onClick}
            className={`flex gap-3 w-full px-2  py-2 items-center lg:${num === check ? 'bg-blue-500  rounded' : ''}`}
        >
            <img className="object-cover w-6 h-6" src={logo} alt="" />
            <p className="font-semibold text-lg">{text}</p>
        </button>
    );
}

export default HomeNav;
