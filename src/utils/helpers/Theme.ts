export const AccentColors = ['#1ee6e6', '#0077f6', '#a14ea3', '#f14e9b', '#ff5257', '#f7821b', '#ffc600', '#62ba46'];

export const toggleAccent = (el: string) => {
    localStorage.setItem('accent', el);
    addAccent(el);
};

export const addAccent = (el?: any) => {
    const color = localStorage.getItem('accent');
    if (color !== null) {
        document.querySelector<HTMLElement>(':root')?.style.setProperty('--accent-color', color);
    }
};


export const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    addTheme();
};

export const addTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('body')?.classList.remove('dark');
    } else {
        document.querySelector('body')?.classList.add('dark');
    }
};
