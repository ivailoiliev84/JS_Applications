import { page } from "./lib.js";
import { render } from "./lib.js"
import { addBookPage } from "./views/addBook.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { myBookPage } from "./views/myBook.js";
import { regesterPage } from "./views/regester.js";


import * as api from './api/data.js';
import { getUserData } from "./util.js";
import { logout } from "./api/api.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";

window.api = api;

const root = document.querySelector('#site-content');
document.querySelector('#logoutBtn').addEventListener('click', logoutUser)


page(decorateContext);
page('/home', homePage);
page('/login', loginPage);
page('/regester', regesterPage);
page('/myBook', myBookPage);
page('/addBook', addBookPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);


isLoginUser()
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.isLoginUser = isLoginUser;
   
    next();
}

function logoutUser(){
    logout();
    isLoginUser();
    
}

function isLoginUser(){
    const userData = getUserData();
    
    if(userData){
        document.querySelector("#user").style.display = 'flex';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;

    }else{
        document.querySelector("#user").style.display = 'none';
        document.querySelector('#guest').style.display = 'flex';
    }
}