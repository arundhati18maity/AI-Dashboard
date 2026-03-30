import { Link, NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AndroidIcon from '@mui/icons-material/Android';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function Sidebar() {

    const linkStyle = ({ isActive }: { isActive: boolean }) =>
        `p-3 text-gray-300 font-medium rounded-xl text-sm leading-none flex items-center  gap-2.5 transition-all duration-200
        ${isActive ? "bg-blue-800 text-white" : ""} `;

    return (
        <div className="w-64 bg-black text-white shadow h-full py-4 px-6">
            <Link to="/" className="block text-xl font-bold mb-6">AI Dashboard</Link>

            <nav className="flex flex-col gap-3">
                <NavLink to="/" className={linkStyle}><DashboardIcon />Dashboard</NavLink>
                <NavLink to="/models" className={linkStyle}><AndroidIcon />Models</NavLink>
                <NavLink to="/analytics" className={linkStyle}><AnalyticsIcon />Analytics</NavLink>
                <NavLink to="/conversations" className={linkStyle}><QuestionAnswerIcon />Conversations</NavLink>
            </nav>
        </div>
    )
}
