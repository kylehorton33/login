<script>
	import Cookies from 'js-cookie';
	
	const token = Cookies.get('token');
</script>

<h1 class="h1">Let's get cracking bones!</h1>
<p>Start by exploring:</p>
<ul>
	<li>
		<code class="code">/src/routes/+layout.svelte</code> - barebones layout, the CSS import order is
		critical!
	</li>
	<li>
		<code class="code">/src/app.postcss</code> - minimal css to make the page full screen, may not be
		relevant for your project
	</li>
	<li>
		<code class="code">/src/routes/+page.svelte</code> - this page, you can replace the contents
	</li>
	<div class="w-full">
		<pre class="break-all">{token}</pre>
	</div>
	
</ul>
