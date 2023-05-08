<script lang="ts">
    import CreateReview from '../../../../components/CreateReview.component.svelte';
    import type { EmployeeModel } from '../../../../models/employee.model';
    export var data: any;
    console.log(data);
</script>

<div class="container">
    <h1 class="text-3xl font-bold underline">Create a new Employee Review</h1>
    <p>Use your 1:1 notes and documented feedback on the left as a reference to populate your employee review.</p>
    <CreateReview bind:data/>
</div>
