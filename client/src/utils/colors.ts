export const hexToRgb = (hex: string) => {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? (
        {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16)
        }
    ) : null;
};

export const getForegroundColorBasedOnBackgroundColor = (color: string) => {
	const red = hexToRgb(color)?.red || 0;
	const green = hexToRgb(color)?.green || 0;
	const blue = hexToRgb(color)?.blue || 0;

	const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

	if (luminance > 160) return '#000000';

	return '#ffffff';
};
