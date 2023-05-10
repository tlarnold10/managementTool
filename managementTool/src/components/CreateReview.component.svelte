<script lang="ts">
    import { onMount } from "svelte";
    import type { EmployeeModel } from "../models/employee.model";
    import type { FeedbackModel } from "../models/feedback.model";
    import type { OneOnOneModel } from "../models/one-on-one.model";
    import type { EmployeeReviewModel } from "../models/review.model";
    export var data: any;

    var _currentEmployee: EmployeeModel = data?.currentEmployee;

    let feedbackItems: FeedbackModel[] = [];
    let oneOnOnes: OneOnOneModel[] = [];
    let reviews: EmployeeReviewModel[] = [];
    

    export var newReview: EmployeeReviewModel = {
        name: '',
        reviewDate: new Date(),
        employeeReviewFeedback: ''
    }
    newReview;
    $: reviews;
    $: if (_currentEmployee !== undefined && _currentEmployee.employeeReviews !== undefined && newReview.employeeReviewFeedback != '') {
        reviews = [...reviews, newReview];
    }

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

if (_currentEmployee !== undefined && _currentEmployee.employeeReviews !== undefined) {
    _currentEmployee.employeeReviews.forEach(review => {
        reviews.push(review);
    });
}

    let selectedItemId: any = null;
    function selectedItem(id: number) {
        selectedItemId = id
    }

    function onSubmit(e: any) {
        var reviewString: string = `Period Summary: ${e.target[0].value} \nKudos: ${e.target[1].value} \nAreas for Improvement: ${e.target[2].value} \nAction Items: ${e.target[3].value}`;
        
        newReview.name = _currentEmployee.name;
        newReview.employeeReviewFeedback = reviewString;
    }

</script>

<style>
    .container {
        display: flex;
    }
    .list {
        flex: 1;
        padding: 1rem;
        border: 1px solid black;
    }
    .form {
        flex: 1;
        padding: 1rem;
        border: 1px solid black;
    }
    .details {
        color: black;
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
        <form on:submit|preventDefault={onSubmit}>
			<div class="my-5">
                <label for="feedbackArea">Period Summary: </label>
                <textarea class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="feedbackArea"
                rows="4"
                placeholder="Your message"></textarea>
                <br>
                <label for="feedbackArea">Kudos: </label>
                <textarea class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="feedbackArea"
                rows="4"
                placeholder="Your message"></textarea>
                <br>
                <label for="feedbackArea">Areas for Improvement: </label>
                <textarea class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="feedbackArea"
                rows="4"
                placeholder="Your message"></textarea>
                <br>
                <label for="feedbackArea">Action Items: </label>
                <textarea class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="feedbackArea"
                rows="4"
                placeholder="Your message"></textarea>
			</div>
			<!--Footer-->
			<div class="flex justify-end pt-2">
				<button
					class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300" type="reset">Cancel</button>
				<button
					class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" type="submit">Confirm</button>
			</div>
            </form>
    </div>
</div>
<div>
    <h2>Previous Reviews for reference</h2>
    <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
    {#each reviews as review}
        <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{review.reviewDate.toDateString()}</dt>
            <dd class="text-lg font-semibold details">{review.employeeReviewFeedback}</dd>
        </div>
    {/each}
    </dl>
</div>