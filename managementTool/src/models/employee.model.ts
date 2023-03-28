import type { GoalModel } from './goal.model';

export interface EmployeeModel {
    name: string,
    position: string,
    goals: GoalModel[]
}