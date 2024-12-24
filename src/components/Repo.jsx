import React from "react";

function Repo({curr}){
    const {name, access, tech, size, updated} = curr;
    return (
        <div className="w-full py-3 flex flex-col gap-2">
            <div className="px-7 flex gap-2">
                <h3 className="font-semibold text-2xl">{name}</h3>
                <div className="bg-blue-200 rounded-2xl px-2 flex items-center">
                    <p className="text-blue-500 ">{access}</p>
                </div>
            </div>
            <div className="px-7 flex gap-10">
                <div className="flex items-center">
                    <h3>{tech}</h3>
                    <div className="bg-blue-600 rounded-full w-2 h-2 ml-2"></div>
                </div>
                <div className="flex gap-2">
                    <i className="ri-database-2-line"></i>
                    <p className="">{size} KB</p>
                </div>
                <div>
                    <p>Updated {updated} Day ago</p>
                </div>
            </div>
            <hr className='text-zinc-600 mt-3' />
        </div>
    );
}

export default Repo;