import { c as create_ssr_component, v as validate_component, d as each, e as escape } from './index-5807c32b.js';

const css = {
  code: ".container.svelte-1nud9ol{padding:3em}",
  map: null
};
const Employees = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var currentManager = { name: "Billy Bob", employees: [] };
  $$result.css.add(css);
  return `<div class="container svelte-1nud9ol"><h1 class="text-3xl font-bold underline">Direct Reports</h1>
    <p>Below you will find a list of your direct reports, select one to edit their profile.</p>
    <div class="container svelte-1nud9ol"><table class="min-w-full text-left text-sm font-light"><thead class="border-b font-medium dark:border-neutral-500"><tr><th scope="col" class="px-6 py-4">Name</th>
            <th scope="col" class="px-6 py-4">Position</th>
            <th scope="col" class="px-6 py-4">Next 1:1</th>
            <th scope="col" class="px-6 py-4">Next Review</th>
            <th scope="col" class="px-6 py-4">Review</th></tr></thead>
        <tbody>${each(currentManager.employees, (employee, index) => {
    return `<tr class="border-b dark:border-neutral-500"><td class="whitespace-nowrap px-6 py-4">${escape(employee.name)}</td>
                <td class="whitespace-nowrap px-6 py-4">${escape(employee.position)}</td>
                <td class="whitespace-nowrap px-6 py-4"></td>
                <td class="whitespace-nowrap px-6 py-4"></td>
                <td><a href="${"/employee/" + escape(employee.name, true)}"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REVIEW</button></a></td>
            </tr>`;
  })}</tbody></table></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Employees</h1>
${validate_component(Employees, "Employees").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-17f16ca6.js.map
