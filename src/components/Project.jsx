
export default function Project() {
    return (
        <>
        <article className="projects">
            <div className="projects__section">
                <h1 className="projects__title">Projects</h1>
                <p className="projects__description">Here are some of the projects I've worked on.</p>
            </div>
            <section className="projects__container">
                <div className="projects__div">
                <div className="projects__card">
                <div className="projects__cont">
                    <img className="projects__image" src="../mymovies.png" alt="" />
                    <a className="projects__button" href="https://lort.onrender.com">Visit site</a>
                    <p className="projects__name">mymovies</p>
                    </div>
                </div>
                <div className="projects__card">                                       
                <div className="projects__cont">
                    <img className="projects__image" src="../dinmaegler.png" alt="" />
                    <a className="projects__button" href="https://praktik-din-m-gler-team-2.onrender.com">Visit site</a>
                    <p className="projects__name">Dinmaegler</p>
                    </div>
                </div>
                <div className="projects__card">
                    <div className="projects__cont">
                    <img className="projects__image" src="../mymovies.png" alt="" />
                     <a className="projects__button" href="https://lort.onrender.com">Visit site</a>
                     <p className="projects__name">mymovies</p>
                    </div>
                </div>
                </div>  
            </section>
        </article> 
        </>
    )
}