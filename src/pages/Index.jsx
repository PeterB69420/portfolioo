import Navbar from "../components/Navbar";
import React from 'react';
import '../style/nav.scss';
import '../style/important.scss';
import '../style/starrule.scss';
import '../style/hero.scss';
import Hero from "../components/Hero";

export default function Index() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Navbar />
            <Hero />
        </div>
        </main>
        </>
    )
}