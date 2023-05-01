export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","mock-data/mockEmployees.json","mock-data/mockFeedback.json","mock-data/mockGoals.json","mock-data/mockManager.json","mock-data/mockOneonOne.json","mock-data/mockReview.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a36c17ba.js","imports":["_app/immutable/entry/start.a36c17ba.js","_app/immutable/chunks/index.fdbbf576.js","_app/immutable/chunks/singletons.e8aad7a9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.466cb456.js","imports":["_app/immutable/entry/app.466cb456.js","_app/immutable/chunks/index.fdbbf576.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
