import React from "react";
//WE HAVE TO IMPORT THIS ALWAYS BECAUSE OF JSX
//(put html code in JS)

function MyInfo(){
    return (
        <div>
            <h1>
                Márton
            </h1>
            <p>
                little brub about myself
            </p>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
    //needs to return a single JSX element
    //it has to be a single element, next to this an ordered list will not work
}

export default MyInfo