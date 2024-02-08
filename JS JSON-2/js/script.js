function submitForm() {
    let startX = document.getElementById("startX").value;
    let startY = document.getElementById("startY").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let fillColor = document.getElementById("fillColor").value;
    let borderColor = document.getElementById("borderColor").value;
    let borderWidth = document.getElementById("borderWidth").value;

    let rectangleParams = {
        startX: parseInt(startX),
        startY: parseInt(startY),
        width: parseInt(width),
        height: parseInt(height),
        fillColor: fillColor,
        borderColor: borderColor,
        borderWidth: parseInt(borderWidth)
    };

    let jsonString = JSON.stringify(rectangleParams);
    window.location.href = "result.html?params=" + encodeURIComponent(jsonString);
}