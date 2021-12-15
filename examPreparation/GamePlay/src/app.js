
import { render } from './lib.js';
import { page } from './lib.js';
import { getUserData } from './util.js';


import * as api from './api/data.js';
window.api = api

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { logout } from './api/api.js';
import { registerPage } from './views/register.js';
import { allGamesPage } from './views/allGames.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';



const root = document.querySelector('#main-content');
const logoutBtn = document.querySelector('#logoutBtn');
logoutBtn.addEventListener('click', onLogout);



page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/allGames', allGamesPage);
page('/create', createPage);
page('/details/:id', detailsPage)
page('/edit/:id', editPage)


updateUserNav();
page.start()





function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}


async function updateUserNav(){
    const userData = await getUserData();

    if(userData){
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#guest').style.display = 'none'

    }else{
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'block'
    }
}


function onLogout(){
    logout();
    updateUserNav()
    
}