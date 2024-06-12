import React from "react";
import './Page.css'

function Page() {
    return (
        <>
            <section className="section">
                <h2>Ծրագրավորման դասընթացներ</h2>
                <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                <div className="main1">
                    <div className="right">
                        <div class="box">
                            <img className="image" src="https://smartcode.am/public/image/courses/front-end.svg" alt="nkar" />
                            <h3 className="h2">WEB Front-End</h3>
                            <h3>Դասընթաց</h3>
                            <a class="act">Դիտել</a>
                            <p className="paragrap">
                                <span>8 ամիս</span>
                                <span>58,000 ֏</span>
                            </p>
                        </div>
                        <div class="box">
                            <img className="image" src="https://smartcode.am/public/image/courses/java.svg" alt="nkar" />
                            <h3 className="h2">Java</h3>
                            <h3>Դասընթաց</h3>
                            <a class="act">Դիտել</a>
                            <p className="paragrap">
                                <span>6 ամիս</span>
                                <span>68,000 ֏</span>
                            </p>
                        </div>
                    </div>
                    <div className="left">
                        <img className="img1" src="https://smartcode.am/public/image/per4.svg" alt="nkar" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page