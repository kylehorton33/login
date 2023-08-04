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
		client: {"start":"_app/immutable/entry/start.dc72cc34.js","app":"_app/immutable/entry/app.5272ece7.js","imports":["_app/immutable/entry/start.dc72cc34.js","_app/immutable/chunks/index.e1b41b02.js","_app/immutable/chunks/singletons.4cd44dbd.js","_app/immutable/chunks/index.e3d1d3fb.js","_app/immutable/entry/app.5272ece7.js","_app/immutable/chunks/index.e1b41b02.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-9ca4aa5b.js')),
			__memo(() => import('./chunks/1-c47714a2.js')),
			__memo(() => import('./chunks/2-1582aff8.js')),
			__memo(() => import('./chunks/3-ee6da79e.js')),
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
