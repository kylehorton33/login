import { c as create_ssr_component, e as escape } from './index-41dea004.js';
import Cookies from 'js-cookie';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const token = Cookies.get("token");
  return `<h1 class="h1">Let&#39;s get cracking bones!</h1>
<p>Start by exploring:</p>
<ul><li><code class="code">/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is
		critical!
	</li>
	<li><code class="code">/src/app.postcss</code> - minimal css to make the page full screen, may not be
		relevant for your project
	</li>
	<li><code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
	</li>
	<div class="w-full"><pre class="break-all">${escape(token)}</pre></div></ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5857a72b.js.map
