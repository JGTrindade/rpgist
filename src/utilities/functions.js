export function getImgPath(imgPath) {
    for (let i = 0; i < imgPath.length; i++) {
        if (imgPath[i] === ' ') {
            imgPath = imgPath.replace(imgPath[i], '-'); // Remember to replace the second argument with a function to replace all occurrences and not only the first.
        }
    }
    return imgPath + '.jpg';
}

export function getImgAltText(raceName) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(raceName[0].toLowerCase()) ? `An ${raceName}` : `A ${raceName}`;
}