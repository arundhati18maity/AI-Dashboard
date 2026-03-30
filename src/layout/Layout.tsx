import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Navbar />
                <main className="pt-[90px] pb-10 px-6 bg-gray-100 flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
