import React from "react";
import { Navbar } from "../components/Navbar";

export const About = () => {
    return (
        <>
            <Navbar />
            <div className="w-full h-screen !bg-center !bg-cover !bg-fixed !bg-no-repeat" style={{
                background: `linear-gradient(
              rgba(0, 0, 0, 0.7), 
              rgba(0, 0, 0, 0.7)
              ),  url("https://wallpaperset.com/w/full/f/0/6/402520.jpg")`}}>

                <div className="text-white flex flex-col justify-center items-start h-[80vh] mx-3 sm:mx-5  md:mx-36">
                    <h1 className="text-2xl font-semibold mb-7">Selamat datang di dunia kopi yang luar biasa!</h1>
                    <p>Kami di <b>KOPI LOMBOK</b> adalah pecinta kopi yang bersemangat dan kami  tidak sabar untuk <br /> memperkenalkanmu pada pengalaman kopi yang luar biasa yang kami tawarkan. <br /> Kami adalah lebih dari sekadar sebuah kedai kopi - kami adalah rumah bagi rasa<br /> dan kehangatan, serta komunitas pecinta kopi yang penuh semangat.</p>
                </div>
            </div>
        </>
    );
};
