export function cleanAndTrimString(inputString: string) {
    const tagRegex = /<\s*([^\s>\/]+)/g;
    const matches = inputString.match(tagRegex);
    if (matches) {
        return matches.map(match => match.replace(/[<>\s]/g, '')).join('\n');
    }
    return '';
}