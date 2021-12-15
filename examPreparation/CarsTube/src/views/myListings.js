import { getCars } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const myListingsTemplate = (myColection) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

    ${myColection.length == 0 ? html`<p class="no-cars">No cars in database.</p>`
    : myColection.map(singleTempalte)}
    </div>
</section>`


const singleTempalte = (car) => html`
<div class="listing">
<div class="preview">
    <img src=${car.imageUrl}>
</div>
<h2>${car.brand} ${car.model}</h2>
<div class="info">
    <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
    </div>
    <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
    </div>
</div>
</div>`




export async function myListingsPaage(ctx){
    const myColection = [];

    const cars = await getCars();
    const userData = await getUserData();


    for(let el of cars){
        if(el._ownerId == userData.id){
            myColection.push(el)
        }
    }
    ctx.render(myListingsTemplate(myColection));

}