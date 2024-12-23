export function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

export function linkCss(href) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.href = href;
        link.rel = "stylesheet";
        link.onload = resolve;
        link.onerror = reject;
        document.head.appendChild(link);
    });
}