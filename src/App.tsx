import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import BlogList from "@/pages/Blog/BlogList";
import BlogDetail from "@/pages/Blog/BlogDetail";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="blog" element={<BlogList />} />
                    <Route path="blog/:slug" element={<BlogDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
