<script lang="ts">
    import { current_component, each, onMount, setContext } from 'svelte/internal';
    import CreateFeedback from '../../../components/modals/CreateFeedback.component.svelte';
    import CreateNotes from '../../../components/modals/CreateNotes.component.svelte';
    import CreateGoal from '../../../components/modals/CreateGoal.component.svelte';
    import type { EmployeeModel } from '../../../models/employee.model';
    import type { FeedbackModel } from '../../../models/feedback.model';
    import type { OneOnOneModel } from '../../../models/one-on-one.model';
    import type { GoalModel } from '../../../models/goal.model';

    export let data;
    var _currentEmployee: EmployeeModel | undefined = data.currentEmployee;
    let createNoteComponent: any;
    let createFeedbackComponent: any;
    let createGoalComponent: any;

    let newNote: any = [];
    let tempOneOnOne: OneOnOneModel;
    $: newNote;
    $: if (newNote.length > 0 && _currentEmployee !== undefined && _currentEmployee.oneOnOnes !== undefined) {
        tempOneOnOne = {
            name: _currentEmployee.name,
            meetingDate: new Date(),
            notes: newNote
        };
        _currentEmployee.oneOnOnes = [..._currentEmployee.oneOnOnes, tempOneOnOne];
    }

    let newFeedback: FeedbackModel = {
        name: '',
        feedbackContent: '',
        type: ''
    };
    $: newFeedback;
    $: if (newFeedback.name !== '' && newFeedback.feedbackContent !== '' && _currentEmployee !== undefined && _currentEmployee.employeeFeedback !== undefined) {
        _currentEmployee.employeeFeedback = [..._currentEmployee.employeeFeedback, newFeedback];
    }

    let newGoal: GoalModel = {
        name: '',
        title: '',
        description: ''
    }
    $: newGoal;
    $: if (newGoal.name !== '' && newGoal.title !== '' && _currentEmployee !== undefined && _currentEmployee.goals !== undefined) {
        _currentEmployee.goals = [..._currentEmployee.goals, newGoal];
    }

    function formatDate(date: Date): string {
        return date.toDateString();
    }

</script>

<div class="container">
<h1>Employee Profile for {_currentEmployee?.name}</h1>
    <div class="mx-auto my-20 drop-shadow rounded-md">
        <!-- The First FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Position<button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>{_currentEmployee?.position}</p>
            </div>
        </details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Goals<button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => createGoalComponent.showGoalModal(_currentEmployee)} >New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol class="w-200">
                    {#if _currentEmployee?.goals?.length !== undefined && _currentEmployee?.goals?.length > 0 }
                        {#each _currentEmployee.goals as goal, index}
                        <li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                            <h1>Goal Title: {goal.title}</h1>
                            <p><em>Goal Description: {goal.description}</em></p>
                            <!-- <p>Due: <strong>{formatDate(goal.dueDate)}</strong></p>-->
                        </li>
                        <br>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Reviews<a href="/employee/{_currentEmployee?.name}/review"><button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></a></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol class="w-200">
                    {#if _currentEmployee?.employeeReviews?.length !== undefined && _currentEmployee?.employeeReviews.length > 0}
                        {#each _currentEmployee?.employeeReviews as reviews, index}
                        <!--<li>{reviews.employeeReviewFeedback} <br>---- on <strong>{formatDate(reviews.reviewDate)}</strong></li>-->
                        <li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">{reviews.employeeReviewFeedback}</li>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Feedback<button on:click={() => createFeedbackComponent.showFeedbackModal(_currentEmployee)} class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol class="w-200">
                    {#if _currentEmployee?.employeeFeedback?.length !== undefined && _currentEmployee?.employeeFeedback.length > 0}
                        {#each _currentEmployee?.employeeFeedback as feedback, index}
                        <li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"><em>{feedback.type}</em>: {feedback.feedbackContent}</li>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">One on One Notes <button on:click={() => createNoteComponent.showModal(_currentEmployee)} class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol class="w-200">
                    {#if _currentEmployee?.oneOnOnes?.length !== undefined && _currentEmployee?.oneOnOnes.length > 0}
                        {#each _currentEmployee?.oneOnOnes as meeting, index}
                        <li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                            <!-- {formatDate(meeting.meetingDate)} Meeting -->
                            <ul>
                                {#each meeting.notes as note, index}
                                <li>{note}</li>
                                {/each}
                            </ul>
                        </li>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>
    </div>
	<CreateNotes bind:this={createNoteComponent} bind:newNote/>
	<CreateFeedback bind:this={createFeedbackComponent} bind:newFeedback/>
    <CreateGoal bind:this={createGoalComponent} bind:newGoal/>
</div>