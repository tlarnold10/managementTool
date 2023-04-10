<script lang="ts">
    import { onMount } from "svelte";
    import type { EmployeeModel } from "../../models/employee.model";
    
    var modal: any;
    var _currentEmployee: EmployeeModel = {
        name: ''
    };

    export var newNote: string[] = [];

    onMount(() => {
        modal = document.getElementById('meetingNoteModal');
    });

    export function showModal(current_employee: EmployeeModel) {
        _currentEmployee = current_employee;
        modal?.classList.add('active');
    }

    function closeModal() {
        modal?.classList.remove('active');
    }

    function onSubmit(e: any) {
        newNote = [...newNote, e.target[0].value];
        console.log(newNote);
        modal?.classList.remove('active');
    }

</script>

<div id="meetingNoteModal" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);">
	<div
		class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
		<div class="modal-content py-4 text-left px-6">
			<!--Title-->
			<div class="flex justify-between items-center pb-3">
				<p class="text-2xl font-bold">New One-on-One Meeting Notes: {_currentEmployee.name}</p>
			</div>
			<!--Body-->
            <form on:submit|preventDefault={onSubmit}>
			<div class="my-5">
                <label>
                    Notes: 
                    <input name="notes"/>
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