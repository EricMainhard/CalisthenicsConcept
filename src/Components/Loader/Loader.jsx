import React from "react";

function Loader() {
    return (
<svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "auto" }}
    width="200"
    height="200"
    display="block"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
>
    <circle cx="84" cy="50" r="10">
    <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="1.1363636363636365s"
        keySplines="0 0.5 0.5 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="10;0"
    ></animate>
    <animate
        attributeName="fill"
        begin="0s"
        calcMode="discrete"
        dur="4.545454545454546s"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="#000000;#ffbd4a;#000000;#ffbd4a;#000000"
    ></animate>
    </circle>
    <circle cx="16" cy="50" r="10">
    <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
    ></animate>
    <animate
        attributeName="cx"
        begin="0s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
    ></animate>
    </circle>
    <circle cx="50" cy="50" r="10" fill="#ffbd4a">
    <animate
        attributeName="r"
        begin="-1.1363636363636365s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
    ></animate>
    <animate
        attributeName="cx"
        begin="-1.1363636363636365s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
    ></animate>
    </circle>
    <circle cx="84" cy="50" r="10">
    <animate
        attributeName="r"
        begin="-2.272727272727273s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
    ></animate>
    <animate
        attributeName="cx"
        begin="-2.272727272727273s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
    ></animate>
    </circle>
    <circle cx="16" cy="50" r="10" fill="#ffbd4a">
    <animate
        attributeName="r"
        begin="-3.409090909090909s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;10;10;10"
    ></animate>
    <animate
        attributeName="cx"
        begin="-3.409090909090909s"
        calcMode="spline"
        dur="4.545454545454546s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
    ></animate>
    </circle>
</svg>
);
}

export default Loader;