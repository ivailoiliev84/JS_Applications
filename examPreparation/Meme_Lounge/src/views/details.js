import { deleteMeme, getMemeById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';


const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: Bad code can present some problems

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${meme.description}
            </p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${isOwner ?
        html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} id="deleteBtn" class="button danger">Delete</button>`
        : null}
            
        </div>
    </div>
</section>`

export async function detailsPage(ctx) {

    const meme = await getMemeById(ctx.params.id);

    const userData = getUserData()

    const isOwner = userData && userData.id == meme._ownerId
    ctx.render(detailsTemplate(meme, isOwner, onDelete))

    async function onDelete() {
        const isChoice = confirm('Are you sure you wont to delete this meme?')

        if (isChoice) {
            await deleteMeme(ctx.params.id);
            ctx.page.redirect('/memes')
        }
    }
}