//Класс отрисовки продукта
class ProductSinglePage{
    constructor(containerProduct, productBlock, blockDescription){
        this.containerProduct = containerProduct;
        this.productBlock = document.querySelector(productBlock);
        this.blockDescription = document.querySelector(blockDescription);
        this.productBlockslider = document.querySelector('.slideshow-container')
        this.createSerch();
    }

    createSerch(){
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'slideshow-single-product-container');
        let wrapperDesc = document.createElement('div');
        wrapperDesc.setAttribute('class', 'single-product-informstion')
        let saveId;
        //let products = cardStorage.getProducts();
        if(localStorage.getItem('saveId')){
            saveId = JSON.parse(localStorage.getItem('saveId'))
        }
        
        for(let i=0; i < this.containerProduct.length; i++){
            let index = this.containerProduct.indexOf(this.containerProduct[i].id);
            let activeClass;
            let activeText;
            if(this.containerProduct[i].id == saveId){
                let item = this.getProductItem({
                    tagName: 'div',
                    className: 'slideshow-container'
                });
                
                for(let n = 0; n < this.containerProduct[i].imgArr.length; n++){
                    let itemBlock = this.getCarouselItem({
                        tagName: 'div',
                        className: 'ant-carousel-element mySlides fabe'
                    });
                    let img = this.getProductItem({
                        tagName:'div',
                        className: 'single-product-photo',
                        backgroundImage: `url(${this.containerProduct[i].imgArr[n]})`
                    });
                    item.appendChild(itemBlock);
                    itemBlock.appendChild(img);
                }
                
                let itemDesc = this.getProductItem({
                    tagName: 'div',
                    className: 'item',
                });
                let nameBlock = this.getProductItem({
                    tagName:'div',
                    className:'nameBlock'
                })
                let name = this.getProductItem({
                    tagName: 'h1',
                    className: 'productName',
                    textName: this.containerProduct[i].name
                });
                let mfName = this.getProductItem({
                    tagName: 'h2',
                    className: 'productManufacture',
                    textName: this.containerProduct[i].manufacture
                });
                let priceBlock = this.getProductItem({
                    tagName: 'div',
                    className: 'priceBlock'
                })
                let price = this.getProductItem({
                    tagName: 'span',
                    className: 'price',
                    textName: this.containerProduct[i].price
                })
                if(this.containerProduct[i].priceOff){
                    let priceOff = this.getProductItem({
                        tagName: 'span',
                        className: 'priceOff',
                        textName: this.containerProduct[i].priceOffSell
                    })
                    priceBlock.appendChild(priceOff);
                };
                let descBlock = this.getProductItem({
                    tagName:'div',
                    className:'descBlock'
                });
                let head = this.getProductItem({
                    tagName: 'h2',
                    className: 'head',
                    textName: 'Описание товара'
                });
                let description = this.getProductItem({
                    tagName: 'span',
                    className: 'descripton',
                    textName: `О товаре: ${this.containerProduct[i].description}`
                });
                let btn = this.getProductItem({
                    tagName: 'button',
                    className: 'btn',
                    textName: activeText,
                    id: this.containerProduct[i].id
                });
                btn.addEventListener('click', function(){
                    let id = this.getAttribute('data-id');
                    let result = cardStorage.putProducts(id);
                    if(result.productPush){
                        this.innerHTML = 'Удалить из корзины';
                    } else {
                        this.innerHTML = 'Добавить в корзину';
                    }
                })
                
                
                
                wrapper.appendChild(item);


                priceBlock.appendChild(price);
                
                descBlock.appendChild(head);
                descBlock.appendChild(description);
                nameBlock.appendChild(name);
                nameBlock.appendChild(mfName);
                itemDesc.appendChild(nameBlock);
                itemDesc.appendChild(priceBlock);
                itemDesc.appendChild(descBlock);
                itemDesc.appendChild(btn);
                wrapperDesc.appendChild(itemDesc);
            }
            

            
        }
        
        this.productBlock.appendChild(wrapper);

        let prev = this.getCarouselItem({
            tagName: "a",
            className: "prev",
            onclick: "plusSlides(-1);",
            textName: "&#10094;"
          });
          let next = this.getCarouselItem({
            tagName: "a",
            className: "next",
            onclick: "plusSlides(1);",
            textName: "&#10095;"
          });
          let pointer = this.getCarouselItem({
            tagName: "div",
            className: "pointer"
          });
          this.productBlock.appendChild(prev);
          this.productBlock.appendChild(next);
          this.productBlock.appendChild(pointer);
          let slides = document.getElementsByClassName("mySlides");
          for (let i = 0; i < slides.length; i++) {
            let dot = this.getCarouselItem({
              tagName: "span",
              className: "dot",
              onclick: `currentSlide(${i + 1});`
            });
            pointer.appendChild(dot);
          }

        
        this.blockDescription.appendChild(wrapperDesc);
    }


    getProductItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        if('id' in card){
            elem.setAttribute('data-id', card.id);
        }
        return elem;
    }

    getCarouselItem(tag){
        let elem = document.createElement(tag.tagName);
        if ("className" in tag) {
            elem.setAttribute("class", tag.className);
          }
          if ("id" in tag) {
            elem.setAttribute("id", tag.id);
          }
          if ("textName" in tag) {
            elem.innerHTML = tag.textName;
          }
          if ("backgroundImage" in tag) {
            elem.style.backgroundImage = tag.backgroundImage;
          }
          if ("onclick" in tag) {
            elem.setAttribute("onclick", tag.onclick);
          }
          if ("value" in tag) {
            elem.setAttribute("value", tag.value);
          }
          if ("key" in tag) {
            elem.setAttribute("key", tag.key);
          }

        return elem;
    }
}

//Закидывание в сторадже
class CardStorage{
    constructor(){}
    getProducts(){
        let products = [];
        let productsLocalStorage = localStorage.getItem('cardStorage');
        if(productsLocalStorage != null){
            products = JSON.parse(productsLocalStorage);
        }
        return products;
    }

    putProducts(id){
        let products = this.getProducts();
        let index = products.indexOf(id);
        let productPush;
        if(index === -1){
            products.push(id);
            productPush = true;
        } else {
            products.splice(index, 1);
            productPush = false;
        }

        localStorage.setItem('cardStorage', JSON.stringify(products));

        return{
            productPush: productPush,
            products: products
        }
    }
}

//Каталог товаров
class AllProducts{
    constructor(containerProducts, containerCounter, catalogProduct){
        this.container = document.querySelector(containerProducts);
        this.containerCounter = document.querySelector(containerCounter);
        this.catalogProduct = catalogProduct;
        this.createCatalog();
    }


    createCatalog(){
        let wrapper = document.createElement('slot');
        let products = cardStorage.getProducts();
        this.containerCounter.innerHTML = products.length;
        for(let i = 0; i < this.catalogProduct.length; i++){
            let index = products.indexOf(this.catalogProduct[i].id);
            let activeClass;
            let activeText;
            if(index === -1){
                 activeClass = '';
                 activeText = 'Добавить в корзину'
            } else{
                 activeClass = 'container';
                 activeText = 'Добавить в корзину'
            }
            let item = this.getCatalogItem({
                tagName: 'div',
                className: 'item'
            });
            let name = this.getCatalogItem({
                tagName: 'div',
                className: 'name',
                textName: this.catalogProduct[i].name
            });
            let img = this.getCatalogItem({
                tagName: 'div',
                className: 'img',
                backgroundImage: `url('${this.catalogProduct[i].img}')` 
            });
            let price = this.getCatalogItem({
                tagName: 'div',
                className: 'price',
                textName: this.catalogProduct[i].price
            });
            let btn = this.getCatalogItem({
                tagName: 'button',
                className: 'btn',
                textName: activeText,
                id: this.catalogProduct[i].id
            });
            btn.addEventListener('click', function(){
                let id = this.getAttribute('data-id');
                let result = cardStorage.putProducts(id);
                if(result.productPush){
                    this.innerHTML = 'Удалить из корзины';
                } else {
                    this.innerHTML = 'Добавить в корзину';
                }
            })
            item.appendChild(name);
            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(btn);
            wrapper.appendChild(item);
        }
        this.container.appendChild(wrapper);
    }

    getCatalogItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        if('id' in card){
            elem.setAttribute('data-id', card.id);
        }
        return elem;
    }

}


//Класс отрисовки страницы поиска
class SerchPage{
    constructor(containerSerch){
        this.containerSerch = document.querySelector(containerSerch);
        this.createSerch();
    }

    createSerch(){
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'serch-block-item')
        let saveArr = []
        if(localStorage.getItem('saveArr')){
            saveArr = JSON.parse(localStorage.getItem('saveArr'))
        }
        if(saveArr.length !=0){
            for(let i=0; i < saveArr.length; i++){
                let item = this.getSerchItem({
                    tagName: 'div',
                    className: 'item'
                });
                let nameDesc = this.getSerchItem({
                    tagName: 'div',
                    className: 'nameDesc',
                    idName: saveArr[i].id
                });
                let img = this.getSerchItem({
                    tagName:'div',
                    className: 'image',
                    backgroundImage: `url(${saveArr[i].img})`
                });
                let block = this.getSerchItem({
                    tagName: 'div',
                    className: 'serchBlockItem'
                })
                let name = this.getSerchItem({
                    tagName: 'span',
                    className: 'name',
                    textName: saveArr[i].manufacture
                });
                let nameProd = this.getSerchItem({
                    tagName:'span',
                    className: 'nameProd',
                    textName: saveArr[i].name
                });
                let blockDesc = this.getSerchItem({
                    tagName: 'div',
                    className: 'descAndPrice'
                });
                let desc = this.getSerchItem({
                    tagName:'span',
                    className: 'descriptionMini',
                    textName: saveArr[i].descriptionMini
                })
                let price = this.getSerchItem({
                    tagName: 'span',
                    className: 'price',
                    textName: saveArr[i].price
                })

                nameDesc.appendChild(name);
                nameDesc.appendChild(nameProd);
                item.appendChild(img);
                block.appendChild(nameDesc);
                blockDesc.appendChild(desc);
                blockDesc.appendChild(price);
                block.appendChild(blockDesc);
                item.appendChild(block)
                wrapper.appendChild(item);
            }
            
        }else{
            let item = this.getSerchItem({
                tagName: 'div',
                className: 'item'
            })
            let fail = this.getSerchItem({
                tagName: 'span',
                className: 'yep',
                textName: 'По вашему запросу ничего не найдено'
            })
            item.appendChild(fail);
            wrapper.appendChild(item);
        }
        this.containerSerch.appendChild(wrapper);
    }

    getSerchItem(card){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        }
        if('idName' in card){
            elem.setAttribute('id', card.idName);
        };
        return elem;
    }
}

//Поиск по сайту
class Serch{
    constructor(conteinerSerch, serchBlock){
        this.serchBlock = document.querySelector(serchBlock);
        this.conteinerSerch = conteinerSerch;
        this.createSerch();
    }

    createSerch(){
        let serchArr = [];
        let str = this.serchBlock.value;
        if(str != ""){
            for(let i = 0; i < this.conteinerSerch.length; i++){
                if(this.conteinerSerch[i].manufacture.toLowerCase().match(str.toLowerCase())){
                    serchArr.push(this.conteinerSerch[i]);
                }
            }
        }
        
       console.log(serchArr);
       let saveArr = JSON.stringify(serchArr);
       localStorage.setItem('saveArr', saveArr);
    }
}


//Карусель скидок товаров
class SellPrint{
    constructor(containerProduct, slider) {
        this.container = document.querySelector(containerProduct);
        this.slider = slider;
        this.createCarouselSell();
      }

    createCarouselSell(){
        let wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'saleslideshow-container');
        for(let i = 0; i < this.slider.lenght; i++){
            if(this.slider.priceOff){
                let item = this.getProductItem({
                    tagName: 'div',
                    className: 'saleSlides slide'
                });
                let img = this.getProductItem({
                    tagName:'div',
                    className: 'single-product-photo',
                    backgroundImage: `url(${this.containerProduct[i].img})`
                });
                let nameBlock = this.getProductItem({
                    tagName:'div',
                    className:'nameBlock'
                })
                let name = this.getProductItem({
                    tagName: 'h1',
                    className: 'productName',
                    textName: this.containerProduct[i].name
                });
                let mfName = this.getProductItem({
                    tagName: 'h2',
                    className: 'productManufacture',
                    textName: this.containerProduct[i].manufacture
                });
                let priceBlock = this.getProductItem({
                    tagName: 'div',
                    className: 'priceBlock'
                })
                let price = this.getProductItem({
                    tagName: 'span',
                    className: 'price',
                    textName: this.containerProduct[i].price
                })
                if(this.containerProduct[i].priceOff){
                    let priceOff = this.getProductItem({
                        tagName: 'span',
                        className: 'priceOff',
                        textName: this.containerProduct[i].priceOffSell
                    })
                };
                
                let btn = this.getProductItem({
                    tagName: 'button',
                    className: 'btn',
                    textName: activeText,
                    id: this.containerProduct[i].id
                });
                btn.addEventListener('click', function(){
                    let id = this.getAttribute('data-id');
                    let result = cardStorage.putProducts(id);
                    if(result.productPush){
                        this.innerHTML = 'Удалить из корзины';
                    } else {
                        this.innerHTML = 'Добавить в корзину';
                    }
                })
            }

            
            nameBlock.appendChild(mfName);
            nameBlock.appendChild(name);
            priceBlock.appendChild(price);
            priceBlock.appendChild(priceOff);
            img.appendChild(nameBlock);
            img.appendChild(priceBlock);
            img.appendChild(btn);
            item.appendChild(img);
        }
        this.container.appendChild(item);
    }
    getProductItem(){
        let elem = document.createElement(card.tagName);
        if('className' in card){
            elem.setAttribute('class', card.className);
        };
        if('textName' in card){
            elem.innerHTML = card.textName;
        };
        if('backgroundImage' in card){
            elem.style.backgroundImage = card.backgroundImage;
        };
        return elem;
    }
}

//Тематическая карусель
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
        let prev = this.getCarouselItem({
            tagName: "a",
            className: "prev",
            onclick: "plusSlides(-1);",
            textName: "&#10094;"
          });
          let next = this.getCarouselItem({
            tagName: "a",
            className: "next",
            onclick: "plusSlides(1);",
            textName: "&#10095;"
          });
          let pointer = this.getCarouselItem({
            tagName: "div",
            className: "pointer"
          });
          this.container.appendChild(prev);
          this.container.appendChild(next);
          this.container.appendChild(pointer);
          let slides = document.getElementsByClassName("mySlides");
          for (let i = 0; i < slides.length; i++) {
            let dot = this.getCarouselItem({
              tagName: "span",
              className: "dot",
              onclick: `currentSlide(${i + 1});`
            });
            pointer.appendChild(dot);
          }
        // this.container.appendChild(wrapper);
    }

    getCarouselItem(tag){
        let elem = document.createElement(tag.tagName);
        if ("className" in tag) {
            elem.setAttribute("class", tag.className);
          }
          if ("id" in tag) {
            elem.setAttribute("id", tag.id);
          }
          if ("textName" in tag) {
            elem.innerHTML = tag.textName;
          }
          if ("backgroundImage" in tag) {
            elem.style.backgroundImage = tag.backgroundImage;
          }
          if ("onclick" in tag) {
            elem.setAttribute("onclick", tag.onclick);
          }
          if ("value" in tag) {
            elem.setAttribute("value", tag.value);
          }
          if ("key" in tag) {
            elem.setAttribute("key", tag.key);
          }

        return elem;
    }
}

//Каталог товаров




//let serchPage = new SerchPage('.content-serch');


//let productSinglePage = new ProductSinglePage(catalogProduct, '.clothing-category', '.idp-item-summary');