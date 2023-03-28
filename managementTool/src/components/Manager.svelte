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

<h1>{currentManager.name}</h1>
<ul>
    {#each currentManager.employees as employee, index}
        <li>{employee.name}: {employee.position}</li>
    {/each}
</ul>