import type { EmployeeModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/employee.model";
import type { FeedbackModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/feedback.model";
import type { EmployeeReviewModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/review.model";
import employees from '../../../../static/mock-data/mockEmployees.json';
import feedback from '../../../../static/mock-data/mockFeedback.json';
import reviews from '../../../../static/mock-data/mockReview.json';

var currentEmployee: EmployeeModel | undefined = {
    name: "Trevor",
    position: "temp"
};

export async function load({params}) {
    // const response = fetch('./mock-data/mockEmployees.json');
    var allEmployees: EmployeeModel[] = [];
    var allFeedback: FeedbackModel[] = [];
    var allReviews: EmployeeReviewModel[] = [];
    feedback.forEach(item => {
        var tempFeedback: FeedbackModel = {
            name: item.name,
            type: item.type,
            feedbackContent: item.feedbackContent
        };
        allFeedback.push(tempFeedback);
    });

    reviews.forEach(item => {
        var tempReview: EmployeeReviewModel = {
            name: item.name,
            reviewDate: new Date(item.reviewDate),
            employeeReviewFeedback: item.employeeReviewFeedback
        };
        allReviews.push(tempReview);
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
        allEmployees.push(tempEmployee);
    });
    currentEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name)
    return {
        currentEmployee
    };
}