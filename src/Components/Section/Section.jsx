import React from "react";
import './Section.css'

function Section({ sectionRef }) {
    return (
        <div ref={sectionRef} className="container">
            <div className="main">
                <h2>Ինչո՞ւ սովորել մեզ մոտ</h2>
                <h6>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</h6>
            </div>
            <div className="left">
                <img src="https://smartcode.am/public/image/per2.svg" alt="nkar" />
            </div>
            <a class="btn1">Սկսե՛լ ուսումը</a>
        </div>
    )
}

export default Section