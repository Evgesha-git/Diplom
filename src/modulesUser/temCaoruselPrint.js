class CarouselPrint{
    constructor(containerCaorusel, carouselCatalog){
        this.container = document.querySelector(containerCaorusel);
        this.carouselCatalog = carouselCatalog;
        this.createCarousel();
    }



    createCarousel(){
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'slideshow-container');
        for(let i = 0; i < this.carouselCatalog.length; i++){
            let item = this.getCarouselItem({
                tagName: 'div',
                className: 'ant-carousel-element mySlides fabe'
            });
            let img = this.getCarouselItem({
                tagName: 'div',
                className: 'carousel-image',
                backgroundImage: `url('${this.carouselCatalog[i].img}')`
            });

            item.appendChild(img);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    getCarouselItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        }
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        }

        return elem;
    }
}

let carouselPrint = new CarouselPrint('.ant-carousel-hider', carussel);