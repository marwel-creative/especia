const SLider = {
    init: () => {
        SLider.scroll();
    },
    scroll: () => {
        const slider = document.querySelector('.slider-collection');

        if (slider) {
            var flkty = new Flickity( '.slider-collection', {
                cellAlign: 'center',
                contain: true
            });
        }
    }
};

SLider.init();