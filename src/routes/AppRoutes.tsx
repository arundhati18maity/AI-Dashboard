import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import Models from "../pages/Models"
import Analytics from "../pages/Analytics"
import Conversations from "../pages/Conversations"
import Layout from "../layout/Layout";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/models" element={<Models />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/conversations" element={<Conversations />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}