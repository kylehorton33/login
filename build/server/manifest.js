const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f2e933b6.js","app":"_app/immutable/entry/app.098339c6.js","imports":["_app/immutable/entry/start.f2e933b6.js","_app/immutable/chunks/index.e1b41b02.js","_app/immutable/chunks/singletons.4cab18d1.js","_app/immutable/chunks/index.e3d1d3fb.js","_app/immutable/entry/app.098339c6.js","_app/immutable/chunks/index.e1b41b02.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-9ca4aa5b.js')),
			__memo(() => import('./chunks/1-82abfa8d.js')),
			__memo(() => import('./chunks/2-1582aff8.js')),
			__memo(() => import('./chunks/3-1a8bbd81.js')),
			__memo(() => import('./chunks/4-8821d21f.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
