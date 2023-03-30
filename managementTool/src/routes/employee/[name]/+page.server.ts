import type { EmployeeModel } from "../../../../../../../managementTool/managementTool/managementTool/src/models/employee.model";
import employees from '../../../../static/mock-data/mockEmployees.json';

var currentEmployee: EmployeeModel | undefined = {
    name: "Trevor",
    position: "temp"
};

export async function load({params}) {
    // const response = fetch('./mock-data/mockEmployees.json');
    var allEmployees: EmployeeModel[] = [];
    employees.forEach(item => {
        var tempEmployee = {
            name: item.name,
            position: item.position,
            goals: [],
            oneOnOns: [],
            employeeReviews: []
        };
        allEmployees.push(tempEmployee);
    });
    console.log(currentEmployee);
    currentEmployee = allEmployees.find((employee: EmployeeModel) => employee.name == params.name)
    return {
        currentEmployee
    };
}