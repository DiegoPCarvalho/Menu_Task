'use client'

import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";

export default function Layout(){
    return(
        <div className="container bg-neutral-950">
            <div className="flex h-scheen w-screen">
                <div className="flex">
                    <Menu />
                </div>
                <div className="flex flex-col w-full h-screen ml-3">
                    <Header />
                    <Content />
                </div>
            </div>
        </div>
    )
}