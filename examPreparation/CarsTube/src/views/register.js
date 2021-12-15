import { register } from "../api/api.js";

import { html } from "../lib.js";


const registerTempalte = (onSubmit) => html`
<section id="register">
<div class="container">
    <form @submit=${onSubmit}id="register-form">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>

        <p>Username</p>
        <input type="text" placeholder="Enter Username" name="username" required>

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" required>

        <p>Repeat Password</p>
        <input type="password" placeholder="Repeat Password" name="repeatPass" required>
        <hr>

        <input type="submit" class="registerbtn" value="Register">
    </form>
    <div class="signin">
        <p>Already have an account?
            <a href="#">Sign in</a>.
        </p>
    </div>
</div>
</section>`





export async function registerPage(ctx) {
    ctx.render(registerTempalte(onSubmit))


    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);


        const username = formData.get('username');
        const password = formData.get('password');
        const repeatPass = formData.get('repeatPass');


        if (username == '' || password == '' || repeatPass == '') {
            return alert("Are fields are required!")
        }

        if (password != repeatPass) {
            return alert("Passowrd don\'t mach")
        }

    

        await register(username, password);
        ctx.updateNav();
        ctx.page.redirect('/allListing')
    }
}