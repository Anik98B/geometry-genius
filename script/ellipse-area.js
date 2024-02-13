function calculateEllipseArea() {
    const mejorRadius = getInputValueById('ellipse-mejor-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * mejorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}