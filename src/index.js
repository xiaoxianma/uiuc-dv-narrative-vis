/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Title from "./components/Title";
import WorldHappiness from "./components/WorldHappiness";
import Introduction from "./components/Introduction";



const anchors = ["title", "introduction", "world-happiness"];

const FullpageWrapper = () => (
    <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#282c34", "#282c34", "#282c34"]}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
            console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

            return (
                <div>
                    <Title/>
                    <Introduction/>
                    <WorldHappiness/>
                </div>
            );
        }}
    />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));
