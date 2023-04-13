import { e as employees } from './mockEmployees-a545e635.js';

const feedback = [
  {
    name: "Billy",
    type: "Positive",
    feedbackContent: "You did a great job yesterday with your presentation to the PMO director."
  },
  {
    name: "Billy",
    type: "Negative",
    feedbackContent: "You made Timmy very upset when you singled him out in a team meeting as a slacker. If you want to give someone direct feedback, at least wait until you can talk to him one on one. "
  },
  {
    name: "Billy",
    type: "Positive",
    feedbackContent: "Thank you for going the extra mile with the upset customer and getting them to a solution that worked for both us and them. Your work demonstrated your ability to think outside of the box for a solution while keeping in mind all involved invidivuals. "
  }
];
const reviews = [
  {
    name: "Billy",
    reviewDate: "05-12-2022",
    employeeReviewFeedback: "Something here about your past year's experience and what you should work on during the course of the next year."
  },
  {
    name: "Billy",
    reviewDate: "05-12-2021",
    employeeReviewFeedback: "Something here about your past year's experience and what you should work on during the course of the next year."
  },
  {
    name: "Billy",
    reviewDate: "05-12-2020",
    employeeReviewFeedback: "Something here about your past year's experience and what you should work on during the course of the next year."
  }
];
const goals = [
  {
    name: "Billy",
    title: "On Time Go Lives",
    description: "Do better with go lives",
    dueDate: "12-31-2020"
  },
  {
    name: "Billy",
    title: "Get PMO",
    description: "Achieve PMO",
    dueDate: "12-31-2020"
  },
  {
    name: "Billy",
    title: "Get MBA",
    description: "Get MBA",
    dueDate: "12-31-2024"
  },
  {
    name: "Billy",
    title: "Win Emmy",
    description: "Win an Emmy",
    dueDate: "12-31-2022"
  }
];
const notes = [
  {
    name: "Billy",
    meetingDate: "01-02-2023",
    notes: [
      "Help",
      "me",
      "with my needs"
    ]
  },
  {
    name: "Billy",
    meetingDate: "01-09-2023",
    notes: [
      "Help",
      "me",
      "with my needs"
    ]
  },
  {
    name: "Billy",
    meetingDate: "01-16-2023",
    notes: [
      "Help",
      "me",
      "with my needs"
    ]
  },
  {
    name: "Billy",
    meetingDate: "01-24-2023",
    notes: [
      "Help",
      "me",
      "with my needs"
    ]
  },
  {
    name: "Billy",
    meetingDate: "06-02-2023",
    notes: [
      "Help",
      "me",
      "with my needs"
    ]
  }
];
var currentEmployee = {
  name: "Trevor",
  position: "temp"
};
async function load({ params }) {
  var allEmployees = [];
  var allFeedback = [];
  var allReviews = [];
  var allGoals = [];
  var allNotes = [];
  feedback.forEach((item) => {
    var tempFeedback = {
      name: item.name,
      type: item.type,
      feedbackContent: item.feedbackContent
    };
    allFeedback.push(tempFeedback);
  });
  goals.forEach((item) => {
    var tempGoal = {
      name: item.name,
      title: item.title,
      description: item.description,
      dueDate: new Date(item.dueDate)
    };
    allGoals.push(tempGoal);
  });
  reviews.forEach((item) => {
    var tempReview = {
      name: item.name,
      reviewDate: new Date(item.reviewDate),
      employeeReviewFeedback: item.employeeReviewFeedback
    };
    allReviews.push(tempReview);
  });
  notes.forEach((item) => {
    var tempNotes = {
      name: item.name,
      meetingDate: new Date(item.meetingDate),
      notes: item.notes
    };
    allNotes.push(tempNotes);
  });
  employees.forEach((item) => {
    var tempEmployee = {
      name: item.name,
      position: item.position,
      goals: [],
      oneOnOnes: [],
      employeeReviews: [],
      employeeFeedback: []
    };
    allFeedback.forEach((element) => {
      if (element.name == tempEmployee.name && tempEmployee.employeeFeedback !== void 0) {
        tempEmployee.employeeFeedback.push(element);
      }
    });
    allReviews.forEach((element) => {
      if (element.name == tempEmployee.name && tempEmployee.employeeReviews !== void 0) {
        tempEmployee.employeeReviews.push(element);
      }
    });
    allGoals.forEach((element) => {
      if (element.name == tempEmployee.name && tempEmployee.goals !== void 0) {
        tempEmployee.goals.push(element);
      }
    });
    allNotes.forEach((element) => {
      if (element.name == tempEmployee.name && tempEmployee.oneOnOnes !== void 0) {
        tempEmployee.oneOnOnes.push(element);
      }
    });
    allEmployees.push(tempEmployee);
  });
  currentEmployee = allEmployees.find((employee) => employee.name == params.name);
  return {
    currentEmployee
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-8c89f80c.js')).default;
const file = '_app/immutable/entry/employee-_name_-page.svelte.541f71e7.js';
const server_id = "src/routes/employee/[name]/+page.server.ts";
const imports = ["_app/immutable/entry/employee-_name_-page.svelte.541f71e7.js","_app/immutable/chunks/index.fdbbf576.js"];
const stylesheets = [];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-ff7148be.js.map
