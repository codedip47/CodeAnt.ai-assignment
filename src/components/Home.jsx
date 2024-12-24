import React, { useState } from 'react';
import codeantLogo from '../assets/codeantai.jpg';
import HomeNav from './HomeNav';
import homelogo from '../assets/home-3-line.png';
import codelogo from '../assets/code-s-slash-fill.png';
import cloudlogo from '../assets/cloud-line.png';
import booklogo from '../assets/book-2-line.png';
import settingslogo from '../assets/settings-3-line.png';
import callLogo from '../assets/phone-line.png';
import logoutlogo from '../assets/logout-box-r-line.png';
import Repo from './Repo';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [num, setNum] = useState(1);
    const repo = [
        { name: 'design-system', access: 'Public', tech: 'React', size: '7320', updated: '1' },
        { name: 'codeant-ci-app', access: 'Private', tech: 'Javascript', size: '5871', updated: '2' },
        { name: 'analytics-dashboard', access: 'Private', tech: 'Python', size: '4521', updated: '5' },
        { name: 'mobile-app', access: 'Public', tech: 'Swift', size: '3096', updated: '3' },
        { name: 'e-commerce-platform', access: 'Private', tech: 'Java', size: '6210', updated: '6' },
        { name: 'blog-website', access: 'Public', tech: 'HTML/CSS', size: '1876', updated: '4' },
        { name: 'social-network', access: 'Private', tech: 'PHP', size: '5432', updated: '7' }
    ];

    return (
        <div className="flex flex-col lg:flex-row w-full h-full">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-fit w-full bg-white z-50 transform transition-transform lg:translate-x-0 lg:static lg:w-1/4 ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center p-4 border-b">
                    <img className="w-14 h-14 object-cover" src={codeantLogo} alt="Logo" />
                    <h1 className="text-2xl -mr-2">CodeAnt AI</h1>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex justify-between border border-gray-300 p-2 rounded-lg">
                        <p>codedip47</p>
                        <i className="ri-arrow-down-s-line text-xl"></i>
                    </div>
                    <div className="space-y-4">
                        <HomeNav onClick={() => setNum(1)} logo={homelogo} text="Repositories" num={num} check={1} />
                        <HomeNav onClick={() => setNum(2)} logo={codelogo} text="AI Code Review" num={num} check={2} />
                        <HomeNav onClick={() => setNum(3)} logo={cloudlogo} text="Cloud Security" num={num} check={3} />
                        <HomeNav onClick={() => setNum(4)} logo={booklogo} text="How to use" num={num} check={4} />
                        <HomeNav onClick={() => setNum(5)} logo={settingslogo} text="Settings" num={num} check={5} />
                        <HomeNav onClick={() => setNum(6)} logo={callLogo} text="Support" num={num} check={-6} />
                        <HomeNav onClick={() => setNum(7)} logo={logoutlogo} text="Logout" num={num} check={-7} />
                    </div>
                </div>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-white flex justify-between items-center p-4 shadow-md z-50">
                <div className="flex items-center">
                    <img className="w-8 h-8 object-cover" src={codeantLogo} alt="Logo" />
                    <h1 className="text-lg font-semibold ml-3">CodeAnt AI</h1>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl text-gray-700 mr-2"
                >
                {isMenuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 lg:w-3/4 min-h-screen bg-gray-100 p-4 pt-[5rem] lg:pt-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-lg shadow">
                    <div>
                        <h1 className="text-2xl font-semibold">Repositories</h1>
                        <p className="text-gray-500">33 total repositories</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
                            <i className="ri-refresh-line"></i>
                            <span>Refresh All</span>
                        </button>
                        <button className="flex items-center gap-2 bg-blue-500 text-white rounded-lg px-4 py-2">
                            <i className="ri-add-line"></i>
                            <span>Add Repository</span>
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mt-4 bg-white flex items-center gap-3 p-3 rounded-lg shadow">
                    <i className="ri-search-line text-xl text-gray-500"></i>
                    <input
                        type="text"
                        placeholder="Search Repositories"
                        className="flex-1 outline-none"
                    />
                </div>

                {/* Repositories List */}
                <div className="mt-6 space-y-4">
                    {repo.map((curr, idx) => (
                        <Repo curr={curr} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
