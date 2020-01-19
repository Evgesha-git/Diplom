class SellPrint{
    constructor(containerCaorusel, carouselSell){
        this.container = document.querySelector(containerCaorusel);
        this.carouselSell = carouselSell;
        this.createCarouselSell();
    }

    createCarouselSell(){
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'ant-carousel-list');
        for(let i = 0; i < this.carouselSell.lenght; i++){
            
        }
    }
}