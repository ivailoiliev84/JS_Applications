
import { getBooks } from "../api/data.js";
import { html } from "../lib.js";


const homeTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
    ${books.length == 0 ? html`<p class="no-books">No books in database!</p>`
        : books.map(createOneBookTemplate)}
    </ul>
</section>`


const createOneBookTemplate = (book) => html`
<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: Classic</p>
<p class="img"><img src="${book.imageUrl}"></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>`






export async function homePage(ctx) {
    const books = await getBooks();
    ctx.render(homeTemplate(books))
}

