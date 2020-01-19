function listeners(){
    let block = document.querySelectorAll('.nameDesc');
    for(let i=0; i < block.length; i++){
        document.getElementById(block[i].id).addEventListener('click', ()=>{
                let saveId = JSON.stringify(block[i].id);
                localStorage.setItem('saveId', saveId);
                document.location.href = "./productPage.html";
        });
    }
}

listeners();