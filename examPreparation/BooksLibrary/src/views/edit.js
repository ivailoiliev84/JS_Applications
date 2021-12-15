import { editBookBiId, getBookById } from "../api/data.js";
import { html } from "../lib.js";




const editTempalte = (book, onSubmit) => html`
<section @submit=${onSubmit} id="edit-page" class="edit">
<form id="edit-form" action="#" method="">
    <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
            <label for="title">Title</label>
            <span class="input">
                <input type="text" name="title" id="title" value=${book.title}>
            </span>
        </p>
        <p class="field">
            <label for="description">Description</label>
            <span class="input">
                <textarea name="description"
                    id="description">${book.description}</textarea>
            </span>
        </p>
        <p class="field">
            <label for="image">Image</label>
            <span class="input">
                <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
            </span>
        </p>
        <p class="field">
            <label for="type">Type</label>
            <span class="input">
                <select id="type" name="type" value="Faction">
                    <option value="Fiction" selected>Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mistery">Mistery</option>
                    <option value="Classic">Clasic</option>
                    <option value="Other">Other</option>
                </select>
            </span>
        </p>
        <input class="button submit" type="submit" value="Save">
    </fieldset>
</form>
</section>`;






export async function editPage(ctx) {
    const book = await getBookById(ctx.params.id);
    ctx.render(editTempalte(book, onSubmit));




    async function onSubmit(event) {
        event.preventDefault();


        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        if (title == '' || description == '' || imageUrl == '' || type == '') {
            return alert("Are fields are required!")
        }

        const data = {
            title,
            description,
            imageUrl,
            type
        }

       

        await editBookBiId(ctx.params.id, data);
        ctx.page.redirect('/home')
    }
}