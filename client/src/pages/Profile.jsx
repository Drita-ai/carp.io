import { useEffect, useState } from 'react'

import driaxImg from "./../assets/user/driax.jpeg"

export default function Profile() {
    const todayCompleted = 5
    const todayTotal = 8
    const monthCompleted = 42
    const monthTotal = 60

    const USERNAME = "driax"

    const [todayProgress, setTodayProgress] = useState(0)
    const [monthProgress, setMonthProgress] = useState(0)

    // Animate progress bars on mount
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTodayProgress(Math.round((todayCompleted / todayTotal) * 100))
            setMonthProgress(Math.round((monthCompleted / monthTotal) * 100))
        }, 300)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="h-[calc(100vh-10em)] w-full">
            <div className="w-full h-full p-6 grid grid-cols-3 grid-rows-2 gap-6">
                {/* User Profile */}
                <div className="col-span-1 row-span-2 bg-indigo-400 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl items-center">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-4 mx-auto">
                        <img
                            src={driaxImg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mt-5">@{USERNAME}</h2>
                </div>

                {/* Public Dashboard */}
                <div className="col-span-2 row-span-1 bg-green-300 rounded-2xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-gray-800">Public Dashboard</h3>
                    <p className="text-sm text-gray-700 mt-1">Anyone with your ID can view your to-dos.</p>
                    <a
                        href="https://carp.io/u/abc123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 p-2 bg-white/70 hover:bg-white text-gray-800 rounded-md font-mono shadow-inner transition duration-200"
                    >
                        carp.io/u/{USERNAME} ↗
                    </a>
                </div>

                {/* Monthly Progress */}
                <div className="col-span-1 row-span-1 bg-blue-300 rounded-2xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Monthly Progress</h3>
                    <p className="text-sm text-gray-700">{monthCompleted} / {monthTotal} tasks completed</p>
                    <div className="w-full bg-white/70 rounded-full h-2 mt-2 overflow-hidden">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${monthProgress}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-blue-800 font-semibold">
                        {monthProgress}%
                    </p>
                </div>

                {/* Today's Progress */}
                <div className="col-span-1 row-span-1 bg-yellow-200 rounded-2xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Progress</h3>
                    <p className="text-sm text-gray-700">{todayCompleted} / {todayTotal} tasks completed</p>
                    <div className="w-full bg-white/70 rounded-full h-2 mt-2 overflow-hidden">
                        <div
                            className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${todayProgress}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-right mt-1 text-yellow-700 font-semibold">
                        {todayProgress}%
                    </p>
                </div>

            </div>
        </div>
    )
}
