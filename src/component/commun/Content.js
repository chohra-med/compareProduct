import React from "react";
import "./css/Content.css"
function Content({children}){
    return(
        <div className={"botTopMar centerFlex flex_column"} style={{backgroundColor:'#FEFEFE'}}>
            {children}
        </div>
    )
}

export default Content
