const background = document.querySelector("#background");

const handleScroll = () => {
    const {scrollY, innerHeight } = window;

    const currentIndex = Math.floor(scrollY / (innerHeight  -200 ));

    background.style.transform = `translateX(${currentIndex > 0 ? 56 * currentIndex : 0}px)`
};

document.addEventListener('scroll', handleScroll, {passive: true})

const nav = document.querySelector('nav');

const navScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 50) {
        nav.style.background = 'black';
        nav.style.transition = "0.3s";
    } else {
        nav.style.background = 'transparent';
    }
};

document.addEventListener('scroll', navScroll);


