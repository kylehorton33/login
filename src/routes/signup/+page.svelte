<script lang="ts">
    import axios from 'axios';
	let email: string, username: string, password: string, confirmPassword: string;

	function onSubmit() {
        if (!email) { alert("Enter email!") }
        if (!username) { alert("Enter username!") }
        if (!password) { alert("Enter password!") }
        if (!confirmPassword) { alert("Enter password confirmation!") }
        if (password != confirmPassword) {
            alert("Password and password confirmation must match")
        } else {
            signupUser()
        }
	}
    async function signupUser() {
        try {
            const res = await axios.post('http://localhost:5000/users/signup', {
                    email, username, password
            })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
</script>

<form on:submit={onsubmit}>
	<div class="form space-y-4 p-40">
		<h2>User Signup</h2>
		<input bind:value={email} class="input" type="email" placeholder="Email" />
		<input bind:value={username} class="input" type="text" placeholder="Username" />
		<input bind:value={password} class="input" type="password" placeholder="Password" />
		<input
			bind:value={confirmPassword}
			class="input"
			type="password"
			placeholder="Confirm Password"
		/>
		<div class="mx-auto flex justify-center">
			<button type="submit" class="btn variant-filled" on:click={onSubmit}>Submit</button>
		</div>
	</div>
</form>

<div class="container mx-auto flex justify-center">
	<a href="/">Go Home</a>
</div>

<div class="container mx-auto flex justify-center">
	<a href="/login">Login</a>
</div>
