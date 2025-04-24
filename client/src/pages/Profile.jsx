import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function Profile() {
    const todayCompleted = 5
    const todayTotal = 8
    const monthCompleted = 42
    const monthTotal = 60

    const calcProgress = (done, total) => Math.round((done / total) * 100)

    return (
        <div className='h-[calc(100vh-10em)] w-full'>
            <div className="w-full min-h-full p-6 grid grid-cols-3 grid-rows-2 gap-6">

                {/* User Profile (left column, full height) */}
                <div className="col-span-1 row-span-2 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center">
                    <UserCircleIcon className="w-16 h-16 mb-4 text-white/90" />
                    <h2 className="text-xl font-bold">Username</h2>
                    <p className="text-sm mt-1">User ID: <span className="font-mono">abc123</span></p>
                </div>

                {/* Public Dashboard (top right 2 columns) */}
                <div className="col-span-2 row-span-1 bg-gradient-to-br from-green-100 to-green-300 rounded-2xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800">Public Dashboard</h3>
                    <p className="text-sm text-gray-600 mt-1">Anyone with your ID can view your to-dos.</p>
                    <code className="block mt-4 p-2 bg-white/70 text-gray-800 rounded-md font-mono shadow-inner">
                        carp.io/u/abc123
                    </code>
                </div>

                {/* Monthly Progress (bottom left of right section) */}
                <div className="col-span-1 row-span-1 bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Monthly Progress</h3>
                    <p className="text-sm text-gray-700">{monthCompleted} / {monthTotal} tasks completed</p>
                    <div className="w-full bg-white/70 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${calcProgress(monthCompleted, monthTotal)}%` }}></div>
                    </div>
                </div>

                {/* Today's Progress (bottom right corner) */}
                <div className="col-span-1 row-span-1 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-2xl p-6 shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Today's Progress</h3>
                    <p className="text-sm text-gray-700">{todayCompleted} / {todayTotal} tasks completed</p>
                    <div className="w-full bg-white/70 rounded-full h-2 mt-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${calcProgress(todayCompleted, todayTotal)}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
