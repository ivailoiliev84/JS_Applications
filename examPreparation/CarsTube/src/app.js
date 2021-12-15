import { render } from "./lib.js";
import { page } from "./lib.js";
import { getUserData } from "./util.js";
import { homePage } from "./views/home.js";



import * as api from  './api/data.js'
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { allListingPage } from "./views/allListing.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myListingsPaage } from "./views/myListings.js";
window.api = api


const root = document.querySelector('#site-content');
const btn = document.querySelector('#logoutBtn');
btn.addEventListener('click', onLogout)



page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/allListing', allListingPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/myListings', myListingsPaage);

updateNav();
page.start();

async function decorateContext(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}


async function updateNav(){
    const userData = await getUserData();
    

    if(userData){
        document.querySelector("#profile").style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#profile a').textContent = `Welcome, ${userData.username}`
    }else{
        document.querySelector("#profile").style.display = 'none';
        document.querySelector('#guest').style.display = 'block';

    }
}


async function onLogout(){
    api.logout();
    updateNav();
}

