import { c as create_ssr_component, a as add_attribute } from './index2-06aadbcb.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email, password, confirmPassword;
  return `<form><div class="form space-y-4"><h2>User Signup</h2>
		<input class="input" type="email" placeholder="Email"${add_attribute("value", email, 0)}>
		<input class="input" type="password" placeholder="Password"${add_attribute("value", password, 0)}>
		<input class="input" type="password" placeholder="Confirm Password"${add_attribute("value", confirmPassword, 0)}>
		<div class="mx-auto flex justify-center"><button type="submit" class="btn variant-filled">Submit</button></div></div></form>

<div class="container mx-auto flex justify-center"><a href="/">Go Home</a></div>

<div class="container mx-auto flex justify-center"><a href="/login">Login</a></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fab5fe6c.js.map
