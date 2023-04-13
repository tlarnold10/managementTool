import { e as employees } from './mockEmployees-a545e635.js';

async function load({ params }) {
  return {
    employees: employees.map((employee) => ({
      name: employee.name,
      position: employee.position
    }))
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-17f16ca6.js')).default;
const file = '_app/immutable/entry/employee-page.svelte.656c20b9.js';
const server_id = "src/routes/employee/+page.server.ts";
const imports = ["_app/immutable/entry/employee-page.svelte.656c20b9.js","_app/immutable/chunks/index.fdbbf576.js"];
const stylesheets = ["_app/immutable/assets/_page.57afd5f1.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-3f34882c.js.map
