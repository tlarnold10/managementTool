import type { EmployeeModel } from "./employee.model";

export interface ManagerModel {
    name: string,
    employees: EmployeeModel[]
}