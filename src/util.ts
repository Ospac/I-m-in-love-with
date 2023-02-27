

export function range(size : number, start = 0) {
    return Array.from({length: size}, (_, index) => index + start);
}
