const Header = {
    init: () => {
        Header.scroll();
    },
    scroll: () => {
        function resizeHeaderOnScroll() {
            const distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50,
                headerEl = document.querySelector('sticky-header'),
                body = document.body;
            if (headerEl) {
                if (distanceY > shrinkOn) {
                    headerEl.classList.add('scrolled');
                    body.classList.add('header-scrolled');
                } else {
                    headerEl.classList.remove('scrolled');
                    body.classList.remove('header-scrolled');
                }
            }
        }
        window.addEventListener('scroll', resizeHeaderOnScroll);
    }
};

Header.init();