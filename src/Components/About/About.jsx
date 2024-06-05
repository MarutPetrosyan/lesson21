import React from "react";
import './About.css'

function About({aboutRef}) {
    return (
        <div ref={aboutRef} className="container">
            <div className="main">
                <h2>Մեր մասին</h2>
                <h6>Ընկերության գործունեության մասին</h6>
            </div>
            <div className="main2">
            <div className="left">
                <p>
                    SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 8 տարի է <br />
                    կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, <br />
                    նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:
                </p>
                <p>Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և <br />
                    կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված <br />
                    ծրագրի արդյունքում մեր ուսանողները գրանցում են մեծ <br />
                    հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում <br />
                    մենք վայելում ենք մեր ուսանողների սերն ու վստահությունը:</p>
                <p>
                    Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում <br />
                    SmartCode-ի օգնությամբ
                </p>
            </div>
            <div className="right">
                <img src="https://smartcode.am/public/image/per3.svg" alt="nkar" />
            </div>
            </div>
        </div>
    )
}

export default About