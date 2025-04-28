'use client'

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Layout(){
    return(
        <div className="container">
            <div className="flex h-scheen w-screen">
                <div className="flex">
                    <Menu />
                </div>
                <div className="flex flex-col w-full h-screen">
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </div>
        </div>
    )
}