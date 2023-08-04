import { c as create_ssr_component, d as add_attribute } from './index-41dea004.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email, username, password, confirmPassword;
  return `<form><div class="form space-y-4 p-40"><h2>User Signup</h2>
		<input class="input" type="email" placeholder="Email"${add_attribute("value", email, 0)}>
		<input class="input" type="text" placeholder="Username"${add_attribute("value", username, 0)}>
		<input class="input" type="password" placeholder="Password"${add_attribute("value", password, 0)}>
		<input class="input" type="password" placeholder="Confirm Password"${add_attribute("value", confirmPassword, 0)}>
		<div class="mx-auto flex justify-center"><button type="submit" class="btn variant-filled">Submit</button></div></div></form>

<div class="container mx-auto flex justify-center"><a href="/">Go Home</a></div>

<div class="container mx-auto flex justify-center"><a href="/login">Login</a></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8ab3e2e1.js.map
