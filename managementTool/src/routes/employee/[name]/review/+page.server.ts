import type { EmployeeModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/employee.model";
import type { FeedbackModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/feedback.model";
import type { EmployeeReviewModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/review.model";
import type { GoalModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/goal.model";
import type { OneOnOneModel } from "../../../../../../../../managementTool/managementTool/managementTool/src/models/one-on-one.model";

import { getMockEmployees, getMockFeedback, getMockGoals, getMockOneOnOnes, getMockReviews } from "../../../../services/mockData.service";

var currentEmployee: EmployeeModel | undefined = {
    name: "Trevor",
    position: "temp"
};

export async function load({params}) {
    var allFeedback: FeedbackModel[] = getMockFeedback();
    var allReviews: EmployeeReviewModel[] = getMockReviews();
    var allGoals: GoalModel[] = getMockGoals();
    var allNotes: OneOnOneModel[] = getMockOneOnOnes();
    var allEmployees: EmployeeModel[] = getMockEmployees(allFeedback, allGoals, allReviews, allNotes);
    currentEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name)
    return {
        currentEmployee
    };
}