

import { getMemes } from '../api/data.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';


const profileTemplate = (userData, myColection) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${myColection.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) --> 
            ${myColection.length == 0 ? html`<p class="no-memes">No memes in database.</p>`
        : myColection.map(createMeme)}

    </div>
</section>
`

const createMeme = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`


export async function profilePage(ctx) {
    
    const myColection = []
    const userData = getUserData();
    console.log(userData.gender)
    
    const memes = await getMemes()
    for(let mem of memes){
        if(mem._ownerId == userData.id){
            myColection.push(mem)
        } 
    }

    ctx.render(profileTemplate(userData, myColection))

    
}