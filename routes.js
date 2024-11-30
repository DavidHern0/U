document.addEventListener("DOMContentLoaded", () => {
    function route() {
        const path = window.location.pathname;

        switch (path) {
            case '/timeline':
                window.location.href = '/index.html';
                break;
            case '/test':
                window.location.href = '/test.html';
                break;
            default:
                window.location.href = '/index.html';
        }
    }

    window.onpopstate = () => {
        route();
    };

    function navigateTo(path) {
        window.history.pushState({}, "", path);
        route();
    }

    document.body.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            navigateTo(event.target.getAttribute('href'));
        }
    });
});
