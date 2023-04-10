<script lang="ts">
    import { onMount } from "svelte";
    import type { EmployeeModel } from "../../models/employee.model";
    import type { FeedbackModel } from "../../models/feedback.model";
    
    var modal: any;
    var _currentEmployee: EmployeeModel = {
        name: ''
    };

    export var newFeedback: FeedbackModel = {
        name: '',
        feedbackContent: '',
        type: ''
    };

    onMount(() => {
        modal = document.getElementById('feedbackModal');
    });

    export function showFeedbackModal(current_employee: EmployeeModel) {
        _currentEmployee = current_employee;
        modal?.classList.add('active');
    }

    function closeModal() {
        modal?.classList.remove('active');
    }

    function onSubmit(e: any) {
        newFeedback = {
            name: _currentEmployee.name,
            feedbackContent: e.target[0].value,
            type: e.target[1].value
        }
        modal?.classList.remove('active');
    }

</script>

<div id="feedbackModal" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
	<div
		class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
		<div class="modal-content py-4 text-left px-6">
			<!--Title-->
			<div class="flex justify-between items-center pb-3">
				<p class="text-2xl font-bold">Employee Feedback: {_currentEmployee.name}</p>
			</div>
			<!--Body-->
            <form on:submit|preventDefault={onSubmit}>
			<div class="my-5">
                <label>
                    Feedback Content: 
                    <input name="feedbackContent"/>
                </label>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback Type:
                <select id="feedbackType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="positive">Positive</option>
                  <option value="negative">Negative</option>
                  <option value="opportunity">Opportunity</option>
                  <option value="weakness">Weakness</option>
                </select>
                </label>
			</div>
			<!--Footer-->
			<div class="flex justify-end pt-2">
				<button
					class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300" on:click={closeModal}>Cancel</button>
				<button
					class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" type="submit">Confirm</button>
			</div>
            </form>
		</div>
	</div>
</div>