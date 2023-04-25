import type { EmployeeModel } from "../../models/employee.model";
import employees from '../../../static/mock-data/mockEmployees.json';

export async function load({params}) {
    // const response = fetch('./mock-data/mockEmployees.json');
    return {
        employees: employees.map((employee) => (
            {
                name: employee.name,
                position: employee.position
            }
        ))
    }
}