/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Introduction from "./components/Introduction";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";



const anchors = ["firstPage", "secondPage", "thirdPage"];

const FullpageWrapper = () => (
    <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
            console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

            return (
                <div>
                    <Introduction/>
                    <Slide2/>
                    <Slide3/>
                </div>
            );
        }}
    />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));
