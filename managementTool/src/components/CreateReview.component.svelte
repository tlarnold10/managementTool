<script lang="ts">
    import { onMount } from "svelte";
    import type { EmployeeModel } from "../models/employee.model";
    import type { FeedbackModel } from "../models/feedback.model";
    import type { OneOnOneModel } from "../models/one-on-one.model";
    export var data;

    var _currentEmployee: EmployeeModel = data?.currentEmployee;

    let feedbackItems: FeedbackModel[] = [];
    let oneOnOnes: OneOnOneModel[] = [];

    if (_currentEmployee !== undefined && _currentEmployee.employeeFeedback !== undefined) {
        _currentEmployee.employeeFeedback.forEach(feedback => {
            feedbackItems.push(feedback);
        });
    }

    if (_currentEmployee !== undefined && _currentEmployee.oneOnOnes !== undefined) {
        _currentEmployee.oneOnOnes.forEach(oneonone => {
            oneOnOnes.push(oneonone);
        });
    }

    let selectedItemId: any = null;
    function selectedItem(id: number) {
        selectedItemId = id
    }

</script>

<style>
    .container {
        display: flex;
        height: 100vh;
    }
    .list {
        flex: 1;
        padding: 1rem;
    }
    .form {
        flex: 1;
        padding: 1rem;
    }
</style>

<div class="container">
    <div class="list">
        <h3>Feedback</h3>
        {#each feedbackItems as item}
            <div>
                {item.feedbackContent}
            </div>
            <br>
        {/each}
        <h3>1:1 Notes</h3>
        {#each oneOnOnes as item}
            <div>
                Date: {item.meetingDate.toDateString()}
            </div>
            {#each item.notes as note}
                <div>
                    {note}
                </div>
            {/each}
            <br>
        {/each}
    </div>
    <div class="form">
        {#if selectedItem}
            <h2>Form from {selectedItem}</h2>
        {:else}
            <p>No item selected</p>
        {/if}
    </div>
</div>