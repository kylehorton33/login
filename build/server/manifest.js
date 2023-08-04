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
		client: {"start":"_app/immutable/entry/start.fb3a2c67.js","app":"_app/immutable/entry/app.67a3ba22.js","imports":["_app/immutable/entry/start.fb3a2c67.js","_app/immutable/chunks/index.8b7fe566.js","_app/immutable/chunks/singletons.e88468e2.js","_app/immutable/entry/app.67a3ba22.js","_app/immutable/chunks/index.8b7fe566.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-443c3adb.js')),
			__memo(() => import('./chunks/1-e17e0b2e.js')),
			__memo(() => import('./chunks/2-b1665bf3.js')),
			__memo(() => import('./chunks/3-73c8a021.js')),
			__memo(() => import('./chunks/4-895226c0.js'))
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
