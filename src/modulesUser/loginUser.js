
let loginCreate = {
    'logScreenBlock':`<div class="login_block" id="login_block">
                    <div class="login_backgraund">
                        
                    </div>
                    <div class="container">
                    <div id="autorization" class="autorization">Авторизация</div>
                    <div id="registration" class="registration">Регистрация</div>
                    </div>
                    <div class="login_clouse" id="login_clouse">
                        <span>⨯</span>
                    </div>
                    
                </div>`,

    'autorizationScreen':`<div class="login_main">
                            <h1>Вход</h1>
                            <div class="username">
                                <input type="text" id="username" placeholder="Имя пользователя">
                            </div>
                            <div class="password">
                                <input type="password" id="password" placeholder="Введите пароль">
                            </div>
                            <div class="submit">
                                <button type="submit">Войти</button>
                            </div>
                        </div>`,
    'registrationScreen':`<div class="registration_main">
                            <h1>Регистрация</h1>
                            <span>Введите имя пользователя</span>
                            <div class="username">
                                <input type="text" id="username_r" placeholder="Имя пользователя">
                            </div>
                            <span>Введите email</span>
                            <div class="username">
                                <input type="text" id="email" placeholder="Имя пользователя">
                            </div>
                            <span>Введите пароль</span>
                            <div class="password">
                                <input type="password" id="password_1" placeholder="Введите пароль">
                            </div>
                            <span>Повторите пароль</span>
                            <div class="password">
                                <input type="password" id="password_2" placeholder="Введите пароль">
                            </div>
                            <div class="submit">
                                <button type="submit">Войти</button>
                            </div>
                        </div>`,



    'drawer': (view, wereClass) => {
        document.querySelector(wereClass).innerHTML = view;
    },

    'drawLog': (view, weareClass) =>{
        document.querySelector(weareClass).innerHTML += view;
    },

    'displayVisible': (status) =>{
        let div = document.getElementById('login_block');
        switch (status) {
            case "visible":
                div.style.display="block";
                break;
            case "unvisible":
                div.style.display="none";
                break
            default:
                break;
        }
        
    },
    'displayVisibleBlock': (status, blockNameVizible, blockNameUnvizible) =>{
        let div1 = document.querySelector(blockNameVizible);
        let div2 = document.querySelector(blockNameUnvizible);
        switch (status) {
            case "autorization":
                div1.style.display="block";
                div2.style.display="none";
                break;
            case "registration":
                div1.style.display="none";
                div2.style.display="block";
                break
            default:
                break;
        }
        
    }
}