const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","mock-data/mockEmployees.json","mock-data/mockFeedback.json","mock-data/mockGoals.json","mock-data/mockManager.json","mock-data/mockOneonOne.json","mock-data/mockReview.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8222a12f.js","imports":["_app/immutable/entry/start.8222a12f.js","_app/immutable/chunks/index.fdbbf576.js","_app/immutable/chunks/singletons.7d3bd0d0.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.db328aac.js","imports":["_app/immutable/entry/app.db328aac.js","_app/immutable/chunks/index.fdbbf576.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-5fc9b191.js'),
			() => import('./chunks/1-ebe352ab.js'),
			() => import('./chunks/2-c36f4fa0.js'),
			() => import('./chunks/3-3f34882c.js'),
			() => import('./chunks/4-ff7148be.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/employee",
				pattern: /^\/employee\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/employee/[name]",
				pattern: /^\/employee\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
