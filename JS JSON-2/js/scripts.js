function getParamsFromURL() {
    let urlParams = new URLSearchParams(window.location.search);
    let jsonString = urlParams.get("params");
    let rectangleParams = JSON.parse(decodeURIComponent(jsonString));
    return rectangleParams;
}

function createRectangle() {
    let rectangleParams = getParamsFromURL();
    let rectangleDiv = document.getElementById("rectangle");
    rectangleDiv.style.position = "absolute";
    rectangleDiv.style.left = rectangleParams.startX + "px";
    rectangleDiv.style.top = rectangleParams.startY + "px";
    rectangleDiv.style.width = rectangleParams.width + "px";
    rectangleDiv.style.height = rectangleParams.height + "px";
    rectangleDiv.style.backgroundColor = rectangleParams.fillColor;
    rectangleDiv.style.borderColor = rectangleParams.borderColor;
    rectangleDiv.style.borderWidth = rectangleParams.borderWidth + "px";
    rectangleDiv.style.borderStyle = "solid";
}

window.onload = createRectangle;