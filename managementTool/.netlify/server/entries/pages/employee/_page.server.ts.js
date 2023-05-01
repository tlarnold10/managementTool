import { e as employees } from "../../../chunks/mockEmployees.js";
async function load({ params }) {
  return {
    employees: employees.map((employee) => ({
      name: employee.name,
      position: employee.position
    }))
  };
}
export {
  load
};
