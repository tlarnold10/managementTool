import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../../chunks/index.js";
const CreateFeedback_component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _currentEmployee = { name: "" };
  let { newFeedback = { name: "", feedbackContent: "", type: "" } } = $$props;
  function showFeedbackModal(current_employee) {
    _currentEmployee = current_employee;
  }
  if ($$props.newFeedback === void 0 && $$bindings.newFeedback && newFeedback !== void 0)
    $$bindings.newFeedback(newFeedback);
  if ($$props.showFeedbackModal === void 0 && $$bindings.showFeedbackModal && showFeedbackModal !== void 0)
    $$bindings.showFeedbackModal(showFeedbackModal);
  return `<div id="feedbackModal" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);"><div class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"><div class="modal-content py-4 text-left px-6">
			<div class="flex justify-between items-center pb-3"><p class="text-2xl font-bold">Employee Feedback: ${escape(_currentEmployee.name)}</p></div>
			
            <form><div class="my-5"><label>Feedback Content: 
                    <input name="feedbackContent"></label>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback Type:
                <select id="feedbackType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"><option value="positive">Positive</option><option value="negative">Negative</option><option value="opportunity">Opportunity</option><option value="weakness">Weakness</option></select></label></div>
			
			<div class="flex justify-end pt-2"><button class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Cancel</button>
				<button class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" type="submit">Confirm</button></div></form></div></div></div>`;
});
const CreateNotes_component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _currentEmployee = { name: "" };
  let { newNote = [] } = $$props;
  function showModal(current_employee) {
    _currentEmployee = current_employee;
  }
  if ($$props.newNote === void 0 && $$bindings.newNote && newNote !== void 0)
    $$bindings.newNote(newNote);
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  return `<div id="meetingNoteModal" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0,0,0,.7);"><div class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"><div class="modal-content py-4 text-left px-6">
			<div class="flex justify-between items-center pb-3"><p class="text-2xl font-bold">New One-on-One Meeting Notes: ${escape(_currentEmployee.name)}</p></div>
			
            <form><div class="my-5"><label>Notes: 
                    <input name="notes"></label></div>
			
			<div class="flex justify-end pt-2"><button class="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Cancel</button>
				<button class="focus:outline-none px-4 bg-teal-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" type="submit">Confirm</button></div></form></div></div></div>`;
});
function formatDate(date) {
  return date.toDateString();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  var _currentEmployee = data.currentEmployee;
  let createNoteComponent;
  let createFeedbackComponent;
  let newNote = [];
  let tempOneOnOne;
  let newFeedback = { name: "", feedbackContent: "", type: "" };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (newNote.length > 0 && _currentEmployee !== void 0 && _currentEmployee.oneOnOnes !== void 0) {
        tempOneOnOne = {
          name: _currentEmployee.name,
          meetingDate: /* @__PURE__ */ new Date(),
          notes: newNote
        };
        _currentEmployee.oneOnOnes = [..._currentEmployee.oneOnOnes, tempOneOnOne];
      }
    }
    {
      if (newFeedback.name !== "" && _currentEmployee !== void 0 && _currentEmployee.employeeFeedback !== void 0) {
        _currentEmployee.employeeFeedback = [..._currentEmployee.employeeFeedback, newFeedback];
      }
    }
    $$rendered = `<div class="container"><h1>Employee Profile for ${escape(_currentEmployee?.name)}</h1>
    <div class="mx-auto my-20 drop-shadow rounded-md">
        <details class="bg-gray-300 open:bg-amber-200 duration-300"><summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Position<button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light"><p>${escape(_currentEmployee?.position)}</p></div></details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300"><summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Goals<button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light"><ol>${_currentEmployee?.goals?.length !== void 0 && _currentEmployee?.goals?.length > 0 ? `${each(_currentEmployee.goals, (goal, index) => {
      return `<li><h1>${escape(goal.title)}</h1>
                            <p><em>${escape(goal.description)}</em></p>
                            <p>Due: <strong>${escape(formatDate(goal.dueDate))}</strong></p></li>
                        <br>`;
    })}` : `<li>NA</li>`}</ol></div></details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300"><summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Reviews<button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light"><ol>${_currentEmployee?.employeeReviews?.length !== void 0 && _currentEmployee?.employeeReviews.length > 0 ? `${each(_currentEmployee?.employeeReviews, (reviews, index) => {
      return `<li>${escape(reviews.employeeReviewFeedback)} <br>---- on <strong>${escape(formatDate(reviews.reviewDate))}</strong></li>`;
    })}` : `<li>NA</li>`}</ol></div></details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300"><summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">Employee Feedback<button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light"><ol class="w-200">${_currentEmployee?.employeeFeedback?.length !== void 0 && _currentEmployee?.employeeFeedback.length > 0 ? `${each(_currentEmployee?.employeeFeedback, (feedback, index) => {
      return `<li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">${escape(feedback.type)}: ${escape(feedback.feedbackContent)}</li>`;
    })}` : `<li>NA</li>`}</ol></div></details>

        <details class="bg-gray-300 open:bg-amber-200 duration-300"><summary class="bg-inherit px-5 py-3 text-lg cursor-pointer">One on One Notes <button class="new-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button></summary>
            <div class="bg-white px-5 py-3 border border-gray-300 text-sm font-light"><ol class="w-200">${_currentEmployee?.oneOnOnes?.length !== void 0 && _currentEmployee?.oneOnOnes.length > 0 ? `${each(_currentEmployee?.oneOnOnes, (meeting, index) => {
      return `<li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">${escape(formatDate(meeting.meetingDate))} Meeting
                            <ul>${each(meeting.notes, (note, index2) => {
        return `<li>${escape(note)}</li>`;
      })}</ul>
                        </li>`;
    })}` : `<li>NA</li>`}</ol></div></details></div>
	${validate_component(CreateNotes_component, "CreateNotes").$$render(
      $$result,
      { this: createNoteComponent, newNote },
      {
        this: ($$value) => {
          createNoteComponent = $$value;
          $$settled = false;
        },
        newNote: ($$value) => {
          newNote = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${validate_component(CreateFeedback_component, "CreateFeedback").$$render(
      $$result,
      {
        this: createFeedbackComponent,
        newFeedback
      },
      {
        this: ($$value) => {
          createFeedbackComponent = $$value;
          $$settled = false;
        },
        newFeedback: ($$value) => {
          newFeedback = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
