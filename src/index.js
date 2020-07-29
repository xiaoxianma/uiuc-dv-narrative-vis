/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "./index.css";
import Main from "./components/Main";


const anchors = ["title", "introduction", "world-happiness", "country-rank", "region", "resources"];

const FullpageWrapper = () => (
    <ReactFullpage
        navigation
        anchors={anchors}
        navigationTooltips={anchors}
        sectionsColor={["#282c34", "#282c34", "#282c34", "#282c34", "#282c34", "#282c34"]}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
            console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
            return (
                <Main/>
            );
        }}
    />
);

ReactDOM.render(<FullpageWrapper />, document.getElementById("root"));
