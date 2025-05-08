import Navbar from "../components/Navbar";
import React from 'react';
import '../style/nav.scss';
import '../style/important.scss';
import '../style/starrule.scss';
import '../style/project.scss';
import Project from "../components/Project";

export default function Projects() {
    return (
        <>
        <main className="main">
        <div id="wrapper">
            <Navbar />
            <Project />
        </div>
        </main>
        </>
    )
}