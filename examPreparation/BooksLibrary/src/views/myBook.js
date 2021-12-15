import { getBooks } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";


const myBooksTemplate = (myColection) => html`<section id="my-books-page" class="my-books">
<h1>My Books</h1>
<!-- Display ul: with list-items for every user's books (if any) -->
<ul class="my-books-list">
    ${myColection.length == 0 ? html`<p class="no-books">No books in database!</p>`
    : myColection.map(bookTemplate)}
</ul>

<!-- Display paragraph: If the user doesn't have his own books  -->

</section>`




const bookTemplate = (book) => html`<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: Fiction</p>
<p class="img"><img src=${book.imageUrl}></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>`


export async function myBookPage(ctx) {

    const myColection = [];
    const userData = await getUserData();

    const allBooks = await getBooks();
    for (let book of allBooks) {
        if (book._ownerId == userData.id){
            myColection.push(book)
        }
    
    }

    ctx.render(myBooksTemplate(myColection))

}