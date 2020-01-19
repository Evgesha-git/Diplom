class SerchPage{
    constructor(containerSerch){
        this.containerSerch = document.querySelector(containerSerch);
        this.createSerch();
    }

    createSerch(){
        let wrapper = document.createElement('div');
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
                    className: 'nameDesc'
                })
                let img = this.getSerchItem({
                    tagName:'div',
                    className: 'image',
                    backgroundImage: `url(${saveArr[i].img})`
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
                let desc = this.getSerchItem({
                    tagName:'div',
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
                item.appendChild(nameDesc);
                item.appendChild(img);
                item.appendChild(desc);
                item.appendChild(price);
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
        return elem;
    }
}

let serchPage = new SerchPage('.content');