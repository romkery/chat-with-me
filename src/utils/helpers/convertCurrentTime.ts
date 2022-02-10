const convertCurrentTime = (number: number) => {
    const mins = Math.floor(number / 60);
    const secs = (number % 60).toFixed();
    // @ts-ignore
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export default convertCurrentTime