import type { EmployeeModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/employee.model";
import type { FeedbackModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/feedback.model";
import type { EmployeeReviewModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/review.model";
import type { GoalModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/goal.model";
import type { OneOnOneModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/one-on-one.model";

import { getEmployees, getFeedback, getReviews, getGoals } from "../../../services/data.service";
import { mapReviews, mapEmployees, mapFeedback, mapOOONotes, mapGoals } from "../../../services/mapper.service";

import { getMockEmployees, getMockFeedback, getMockGoals, getMockOneOnOnes, getMockReviews } from "../../../services/mockData.service";


var currentEmployee: EmployeeModel | undefined = {
    name: ""
};

var tempEmployee: EmployeeModel | undefined = {
    name: ""
};


export async function load({params}) {
    // Mock data
    // var allFeedback: FeedbackModel[] = getMockFeedback();
    // var allReviews: EmployeeReviewModel[] = getMockReviews();
    // var allNotes: OneOnOneModel[] = getMockOneOnOnes();
    // var allGoals: GoalModel[] = getMockGoals();
    const employeeData = await getEmployees();
    var allEmployees = mapEmployees(employeeData);
    tempEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name);
    const reviewData = await getReviews(currentEmployee);
    var allReviews: EmployeeReviewModel[] | null = mapReviews(reviewData);
    const feedbackData = await getFeedback(currentEmployee);
    var allFeedbacks: FeedbackModel[] | null = mapFeedback(feedbackData);
    const oneOnOneNotesData = await getFeedback(currentEmployee);
    var allOneOnOneNotes: OneOnOneModel[] | null = mapOOONotes(oneOnOneNotesData);
    const goalsData = await getGoals(currentEmployee);
    var allGoals: GoalModel[] | null = mapGoals(goalsData);
    // var allEmployees: EmployeeModel[] = getMockEmployees(allFeedback, allGoals, allReviews, allNotes);
    if (tempEmployee !== undefined && allReviews !== null && tempEmployee !== null) {
        currentEmployee = {
            name: "",
            position: tempEmployee ? tempEmployee.position : "",
            employeeReviews: allReviews ? allReviews : [],
            employeeFeedback: allFeedbacks ? allFeedbacks : [],
            oneOnOnes: allOneOnOneNotes ? allOneOnOneNotes : [],
            goals: allGoals ? allGoals : []
        }
    }
    
    return {
        currentEmployee
    };
}