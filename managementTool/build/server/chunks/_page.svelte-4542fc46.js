import { c as create_ssr_component, e as escape, v as validate_component, d as each } from './index-5807c32b.js';

const css = {
  code: ".container.svelte-1nud9ol{padding:3em}",
  map: null
};
const Manager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  })}</tbody></table></div>

    <h2 class="text-3xl font-bold underline">Upcoming 1:1s</h2>
    <p>Below you will find a list of your 1:1s coming up in the next 2 weeks</p>

    <h2 class="text-3xl font-bold underline">Upcoming Reviews</h2>
    <p>Below you will find a list of your reviews coming up in the next 2 weeks</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var name = "";
  return `<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button
</button>

<div>${escape(name)}</div>

${validate_component(Manager, "Manager").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4542fc46.js.map
