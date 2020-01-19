let createView = {
    'header':`<header class="header">
    <div class="header_logo"><a class="logo"><img src=""></a></div>
    <div class="header_main">
    <div class="header_bottom">
            <div class="heder_search">
                <div class="search">
                    <form class="search_in">
                        <label class="search_filed">
                            <input class="search_input" placeholder="Поиск по сайту">
                        </label>
                        <a href="./serchPage.html" class="search_submit btn-pill">Найти</a>
                    </form>
                </div>
            </div>
            <div class="header_aside">
                <div class="aut_in">
                    <div class="aut_user" id="intry">
                        <i class="aut_icon"></i>
                        <span class="aut_txt">Вход</span>
                    </div>
                </div>
                <div class="header_aut_bar">
                    <a class="header_aut_bar_item" href="">
                        
                    </a>
                </div>
            </div>
        </div>
        <div class="header_top">
            <div class="menu">
                <nav class="menu-links">
                <div class="waypoint-menu">
                <div class="row">
                    <div class="column">
                        <ul id="meny_center">
                            <li><a href="./index.html" class="a">Главная</a></li>
                            <li><a href="" class="a">Каталог</a></li>
                            <li><a href="" class="a">Блог</a></li>
                            <li><a href="" class="a">О нас</a></li>
                            <li><a href="" class="a">FAQ</a></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
                </nav>
            </div>
        </div>
        
    </div>
</header>
`,

'footer':`<footer class="footer">
<div class="footer_top">
    <div class="footer_main">
        <div class="app_nav">
            <h3 class="app_nav-ttl">Текст</h3>
            <ul class="app_nav_menu">
                <li class="app_nav_it">Текст 1</li>
                <li class="app_nav_it">Текст 2</li>
                <li class="app_nav_it">Текст 3</li>
            </ul>
        </div>
        <div class="app_nav">
            <h3 class="app_nav-ttl">Текст 2</h3>
            <ul class="app_nav_menu">
                <li class="app_nav_it">Текст 2.1</li>
                <li class="app_nav_it">Текст 2.2</li>
                <li class="app_nav_it">Текст 2.3</li>
            </ul>
        </div>
    </div>
</div> 
</footer>`,

'drawer': (view, wereClass) => {
        document.querySelector(wereClass).innerHTML = view;
    }
}

createView.drawer(createView.header, '.header_block');
createView.drawer(createView.footer, '.footer_block');
loginCreate.drawer(loginCreate.logScreenBlock, '.login_user');
loginCreate.drawLog(loginCreate.autorizationScreen, '.container');
loginCreate.drawLog(loginCreate.registrationScreen, '.container');

document.getElementById("intry").addEventListener("click", function(){
    loginCreate.displayVisible('visible');
})
document.getElementById("login_clouse").addEventListener("click", function(){
    loginCreate.displayVisible('unvisible');
})
document.getElementById("autorization").addEventListener("click", function(){
    loginCreate.displayVisibleBlock('autorization', '.registration', '.autorization');
})
document.getElementById("registration").addEventListener("click", function(){
    loginCreate.displayVisibleBlock('registration', 'autorization', '.registation');
})
/*document.querySelector(".login_block").addEventListener("click", function(){
    loginCreate.displayVisible('unvisible');
})*/


// let serchPage = new SerchPage('.content-serch');
// let carouselPrint = new CarouselPrint('.ant-carousel-hider', carussel);


let btn = document.querySelector('.search_submit');
btn.addEventListener('click', function(){
    let serch = new Serch(catalogProduct, '.search_input');
    //document.location.href = "./serchPage.html";
});

document.querySelector('.search_input').addEventListener('keypress', (keyPressed)=>{
    if(keyPressed.which == 13){
        let serch = new Serch(catalogProduct, '.search_input');
        document.location.href = "./serchPage.html";
    } 
});


document.querySelector('.search_input').addEventListener('keyup', ()=>{
    let serch = new Serch(catalogProduct, '.search_input');
});

