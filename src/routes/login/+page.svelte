<script lang="ts">
	import { goto } from '$app/navigation';
    import axios from 'axios';
    import Cookies from 'js-cookie';
	let email: string, password: string;

	function onSubmit() {
        if (!email) { alert("Enter email!") }
        if (!password) { alert("Enter password!") }
        else {
            loginUser()
        }
	}
    async function loginUser() {
        try {
            const res = await axios.post('http://localhost:5000/users/login', {
                    email, password
            })
            Cookies.set('token', res.data.token, { sameSite: 'strict' })
            console.log(res.data.token)
            goto('/')
        } catch (err) {
            console.log(err)
        }
    }
</script>

<form on:submit={onsubmit}>
	<div class="form space-y-4">
		<h2>User Login</h2>
		<input bind:value={email} class="input" type="text" placeholder="Email" />
		<input bind:value={password} class="input" type="password" placeholder="Password" />
		<div class="mx-auto flex justify-center">
			<button type="submit" class="btn variant-filled" on:click={onSubmit}>Submit</button>
		</div>
	</div>
</form>

<div class="container mx-auto flex justify-center">
	<a href="/">Go Home</a>
</div>

<div class="container mx-auto flex justify-center">
	<a href="/signup">Sign Up</a>
</div>
