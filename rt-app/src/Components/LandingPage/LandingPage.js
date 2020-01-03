import React from 'react';
import TitleSection from "./title_section/TitleSection";
import Second from "./second_section/SecondSection";
import Third from "./third_section/ThirdSection";

const LandingPage = () => {
    return (
        <div>
            <TitleSection/>
            <Second/>
            <Third/>
        </div>
    );
};

export default LandingPage;