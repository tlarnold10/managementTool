import type { EmployeeModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/employee.model";
import type { FeedbackModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/feedback.model";
import type { EmployeeReviewModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/review.model";
import type { GoalModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/goal.model";
import type { OneOnOneModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/one-on-one.model";
import employees from '../../../../static/mock-data/mockEmployees.json';
import feedback from '../../../../static/mock-data/mockFeedback.json';
import reviews from '../../../../static/mock-data/mockReview.json';
import goals from '../../../../static/mock-data/mockGoals.json';
import notes from '../../../../static/mock-data/mockOneonOne.json';


var currentEmployee: EmployeeModel | undefined = {
    name: "Trevor",
    position: "temp"
};

export async function load({params}) {
    // const response = fetch('./mock-data/mockEmployees.json');
    var allEmployees: EmployeeModel[] = [];
    var allFeedback: FeedbackModel[] = [];
    var allReviews: EmployeeReviewModel[] = [];
    var allGoals: GoalModel[] = [];
    var allNotes: OneOnOneModel[] = [];
    feedback.forEach(item => {
        var tempFeedback: FeedbackModel = {
            name: item.name,
            type: item.type,
            feedbackContent: item.feedbackContent
        };
        allFeedback.push(tempFeedback);
    });

    goals.forEach(item => {
        var tempGoal: GoalModel = {
            name: item.name,
            title: item.title,
            description: item.description,
            dueDate: new Date(item.dueDate)
        };
        allGoals.push(tempGoal);
    });

    reviews.forEach(item => {
        var tempReview: EmployeeReviewModel = {
            name: item.name,
            reviewDate: new Date(item.reviewDate),
            employeeReviewFeedback: item.employeeReviewFeedback
        };
        allReviews.push(tempReview);
    });

    notes.forEach(item => {
        var tempNotes: OneOnOneModel = {
            name: item.name,
            meetingDate: new Date(item.meetingDate),
            notes: item.notes
        };
        allNotes.push(tempNotes);
    });

    employees.forEach((item) => {
        var tempEmployee: EmployeeModel = {
            name: item.name,
            position: item.position,
            goals: [],
            oneOnOnes: [],
            employeeReviews: [],
            employeeFeedback: []
        };
        allFeedback.forEach((element: FeedbackModel) => {
            if (element.name == tempEmployee.name && tempEmployee.employeeFeedback !== undefined) {
                tempEmployee.employeeFeedback.push(element);
            }
        });
        allReviews.forEach((element: EmployeeReviewModel) => {
            if (element.name == tempEmployee.name && tempEmployee.employeeReviews !== undefined) {
                tempEmployee.employeeReviews.push(element);
            }
        });
        allGoals.forEach((element: GoalModel) => {
            if (element.name == tempEmployee.name && tempEmployee.goals !== undefined) {
                tempEmployee.goals.push(element);
            }
        });
        allNotes.forEach((element: OneOnOneModel) => {
            if (element.name == tempEmployee.name && tempEmployee.oneOnOnes !== undefined) {
                tempEmployee.oneOnOnes.push(element);
            }
        });
        allEmployees.push(tempEmployee);
    });
    currentEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name)
    return {
        currentEmployee
    };
}