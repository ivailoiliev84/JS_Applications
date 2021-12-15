import { register } from "../api/api.js";
import { html } from "../lib.js";



const regesterTemplate = (onSubmit) => html`
<section  @submit=${onSubmit}id="register-page" class="register">
    <form id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`




export function regesterPage(ctx){
    ctx.render(regesterTemplate(onSubmit));

    async function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPass = formData.get('confirm-pass');

        if(email == '' && password =='' && confirmPass == ''){
            return alert("Are field are required!")
        }
        if(password != confirmPass){
            return alert("Password don\'t mach!!!")
        }
        
        await register(email,password);
        ctx.isLoginUser();
        ctx.page.redirect('/home')
    }
}