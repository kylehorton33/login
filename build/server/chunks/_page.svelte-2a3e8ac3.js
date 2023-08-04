import { c as create_ssr_component } from './index2-06aadbcb.js';
import Cookies from 'js-cookie';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Cookies.get("token");
  return `<h1 class="h1">Explore</h1>
<ul><li><a href="/login"><code class="code">/login</code></a> - for existing users
	</li>
	<li><a href="/signup"><code class="code">/signup</code></a> - for new users
	</li></ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2a3e8ac3.js.map
