<script lang="ts">
    import { each } from 'svelte/internal';

    export let data;
    console.log(data);

    function formatDate(date: Date): string {
        return date.toDateString();
    }

</script>

<div class="container">
<h1>Employee Profile for {data.currentEmployee?.name}</h1>
    <div class="mx-auto my-20 drop-shadow rounded-md">
        <!-- The First FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Position</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <p>{data.currentEmployee?.position}</p>
            </div>
        </details>

        <!-- The Second FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Goals</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol>
                    {#if data.currentEmployee?.goals.length > 0}
                        {#each data.currentEmployee?.goals as goal, index}
                        <li>{goal.description}</li>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>

        <!-- The Third FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Reviews</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol>
                    {#if data.currentEmployee?.employeeReviews.length > 0}
                        {#each data.currentEmployee?.employeeReviews as reviews, index}
                        <li>{reviews.employeeReviewFeedback} <br>---- on <strong>{formatDate(reviews.reviewDate)}</strong></li>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>

        <!-- The Third FAQ -->
        <details class="bg-gray-300 open:bg-amber-200 duration-300">
            <summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Feedback</summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                <ol>
                    {#if data.currentEmployee?.employeeFeedback.length > 0}
                        {#each data.currentEmployee?.employeeFeedback as feedback, index}
                        <li>{feedback.feedbackContent}</li>
                        {/each}
                    {:else}
                        <li>NA</li>
                    {/if}
                </ol>
            </div>
        </details>
    </div>
</div>