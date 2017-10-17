export const normalize = arr => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return arr.map(value => (value - min) / (max - min));
}

export const lerp = (now, start, end) => {
    return (now - start) / (end - start);
}