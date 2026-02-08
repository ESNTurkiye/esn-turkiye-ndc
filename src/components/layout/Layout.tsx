import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow pt-[72px] md:pt-[104px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
