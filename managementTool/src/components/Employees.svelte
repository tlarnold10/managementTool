<script lang="ts">
    import { onMount } from "svelte";
    
    import type { ManagerModel } from '../models/manager.model';

    var currentManager: ManagerModel = {
        name: 'Billy Bob',
        employees: []
    };
    onMount(async () => {
        const response = fetch('./mock-data/mockManager.json');
        const data = await (await response).json();
        currentManager = data;
    })

    function _populateManagerData() {
        
    }
</script>

<style>
    .container {
        padding: 3em;
    }
</style>

<div class="container">
    <h1 class="text-3xl font-bold underline">Direct Reports</h1>
    <p>Below you will find a list of your direct reports, select one to edit their profile.</p>
    <div class="container">
      <table class="min-w-full text-left text-sm font-light">
        <thead class="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" class="px-6 py-4">Name</th>
            <th scope="col" class="px-6 py-4">Position</th>
            <th scope="col" class="px-6 py-4">Next 1:1</th>
            <th scope="col" class="px-6 py-4">Next Review</th>
            <th scope="col" class="px-6 py-4">Review</th>
          </tr>
        </thead>
        <tbody>
          {#each currentManager.employees as employee, index}
            <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4">{employee.name}</td>
                <td class="whitespace-nowrap px-6 py-4">{employee.position}</td>
                <td class="whitespace-nowrap px-6 py-4"></td>
                <td class="whitespace-nowrap px-6 py-4"></td>
                <td><a href="/employee/{employee.name}"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REVIEW</button></a></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
</div>