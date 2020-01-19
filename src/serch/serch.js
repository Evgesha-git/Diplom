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
                if(this.conteinerSerch[i].manufacture.match(str)){
                    serchArr.push(this.conteinerSerch[i]);
                }
            }
        }
        
       console.log(serchArr);
       let saveArr = JSON.stringify(serchArr);
       localStorage.setItem('saveArr', saveArr);
    }
}

let btn = document.querySelector('.search_submit');
btn.addEventListener('click', function(){
    let serch = new Serch(catalogProduct, '.search_input');
    document.location.href = "./serchPage.html";
});

document.querySelector('.search_input').addEventListener('keypress', (keyPressed)=>{
    if(keyPressed.which == 13){
        let serch = new Serch(catalogProduct, '.search_input');
        document.location.href = "./vuwes/serchPage.html";
    } 
});


document.querySelector('.search_input').addEventListener('keyup', ()=>{
    let serch = new Serch(catalogProduct, '.search_input');
});

