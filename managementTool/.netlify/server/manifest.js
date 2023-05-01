export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","mock-data/favicon.png","mock-data/mock-data/mockEmployees.json","mock-data/mock-data/mockFeedback.json","mock-data/mock-data/mockGoals.json","mock-data/mock-data/mockManager.json","mock-data/mock-data/mockOneonOne.json","mock-data/mock-data/mockReview.json","mock-data/mockEmployees.json","mock-data/mockFeedback.json","mock-data/mockGoals.json","mock-data/mockManager.json","mock-data/mockOneonOne.json","mock-data/mockReview.json","mock-data/_app/immutable/assets/_layout.5fa74184.css","mock-data/_app/immutable/assets/_layout.d01aa6ef.css","mock-data/_app/immutable/assets/_page.57a76f88.css","mock-data/_app/immutable/assets/_page.57afd5f1.css","mock-data/_app/immutable/chunks/0.fbb097c4.js","mock-data/_app/immutable/chunks/1.9b56cada.js","mock-data/_app/immutable/chunks/2.fe5964f2.js","mock-data/_app/immutable/chunks/3.4e9385b8.js","mock-data/_app/immutable/chunks/4.e4f4f413.js","mock-data/_app/immutable/chunks/index.fdbbf576.js","mock-data/_app/immutable/chunks/singletons.e1484ef6.js","mock-data/_app/immutable/entry/app.2da5bc5c.js","mock-data/_app/immutable/entry/employee-page.svelte.656c20b9.js","mock-data/_app/immutable/entry/employee-_name_-page.svelte.541f71e7.js","mock-data/_app/immutable/entry/error.svelte.d5153b0f.js","mock-data/_app/immutable/entry/start.8c6ba799.js","mock-data/_app/immutable/entry/_layout.svelte.801cdd98.js","mock-data/_app/immutable/entry/_page.svelte.836dd11d.js","mock-data/_app/version.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".css":"text/css",".js":"application/javascript"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1dda3575.js","imports":["_app/immutable/entry/start.1dda3575.js","_app/immutable/chunks/index.fdbbf576.js","_app/immutable/chunks/singletons.5216c929.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2409f56b.js","imports":["_app/immutable/entry/app.2409f56b.js","_app/immutable/chunks/index.fdbbf576.js"],"stylesheets":[],"fonts":[]}},
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
