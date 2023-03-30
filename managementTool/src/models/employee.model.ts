import type { GoalModel } from './goal.model';
import type { OneOnOneModel } from './one-on-one.model';
import type { EmployeeReviewModel } from './review.model';

export interface EmployeeModel {
    name: string,
    position: string,
    goals?: GoalModel[],
    oneOnOnes?: OneOnOneModel[],
    employeeReviews?: EmployeeReviewModel[]
}