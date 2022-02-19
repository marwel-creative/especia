function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);

    if (parentSelector) {
        const clone = parentSelector.innerHTML;
        const firstElement = parentSelector.children[0];
        let i = 0;
        console.log(firstElement);
        parentSelector.insertAdjacentHTML('beforeend', clone);
        parentSelector.insertAdjacentHTML('beforeend', clone);

        setInterval(function () {
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) {
            i = 0;
            }
            i = i + speed;
        }, 0);
    }
}

window.addEventListener('load', Marquee('.marquee-text__wrapper', 0.2))
