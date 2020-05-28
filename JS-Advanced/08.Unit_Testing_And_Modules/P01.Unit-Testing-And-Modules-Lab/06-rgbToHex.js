function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

module.exports = rgbToHexColor;

// RGB color
// The RGB color is a combination of Red, Green and Blue colors:
// (R, G, B)
// The red, green and blue use 8 bits each, which have integer values from 0 to 255.
// So the number of colors that can be generated is:
// 256×256×256 = 16777216 = 100000016
// Hex color code
// Hex color code is a 6 digits hexadecimal (base 16) number:
// RRGGBB16
// The 2 left digits represent the red color.
// The 2 middle digits represent the green color.
// The 2 right digits represent the blue color.