import type { EmployeeModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/employee.model";
import type { FeedbackModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/feedback.model";
import type { EmployeeReviewModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/review.model";
import type { GoalModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/goal.model";
import type { OneOnOneModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/one-on-one.model";

import { getMockEmployees, getMockFeedback, getMockGoals, getMockOneOnOnes, getMockReviews } from "../../../../services/mockData.service";
import { getEmployees, getFeedback, getGoals, getOOONotes, getReviews } from "../../../../services/data.service";
import { mapEmployees, mapFeedback, mapGoals, mapOOONotes, mapReviews } from "../../../../services/mapper.service";

var currentEmployee: EmployeeModel | undefined = {
    name: ""
};

var tempEmployee: EmployeeModel | undefined = {
    name: ""
};

export async function load({params}) {
    // var allFeedback: FeedbackModel[] = getMockFeedback();
    // var allReviews: EmployeeReviewModel[] = getMockReviews();
    // var allGoals: GoalModel[] = getMockGoals();
    // var allNotes: OneOnOneModel[] = getMockOneOnOnes();
    // var allEmployees: EmployeeModel[] = getMockEmployees(allFeedback, allGoals, allReviews, allNotes);
    // currentEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name)
    const employeeData = await getEmployees();
    var allEmployees = mapEmployees(employeeData);
    tempEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name);
    const reviewData = await getReviews(tempEmployee);
    var allReviews: EmployeeReviewModel[] | null = mapReviews(reviewData);
    const feedbackData = await getFeedback(tempEmployee);
    var allFeedbacks: FeedbackModel[] | null = mapFeedback(feedbackData);
    const oneOnOneNotesData = await getOOONotes(tempEmployee);
    var allOneOnOneNotes: OneOnOneModel[] | null = mapOOONotes(oneOnOneNotesData);
    const goalsData = await getGoals(tempEmployee);
    var allGoals: GoalModel[] | null = mapGoals(goalsData);
    // var allEmployees: EmployeeModel[] = getMockEmployees(allFeedback, allGoals, allReviews, allNotes);
    if (tempEmployee !== undefined && allReviews !== null && tempEmployee !== null) {
        currentEmployee = {
            id: tempEmployee.id,
            name: tempEmployee.name,
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