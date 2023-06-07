import employees from '../mock-data/mockEmployees.json';
import notes from '../mock-data/mockOneonOne.json';
import reviews from '../mock-data/mockReview.json';
import feedback from '../mock-data/mockFeedback.json';
import goals from '../mock-data/mockGoals.json';

import type { ManagerModel } from '../models/manager.model';
import type { EmployeeModel } from '../models/employee.model';
import type { FeedbackModel } from '../models/feedback.model';
import type { OneOnOneModel } from '../models/one-on-one.model';
import type { EmployeeReviewModel } from '../models/review.model';
import type { GoalModel } from '../models/goal.model';

export function getMockEmployees(allFeedback: FeedbackModel[], allGoals: GoalModel[], allReviews: EmployeeReviewModel[], allNotes: OneOnOneModel[]): EmployeeModel[] {
    var allEmployees: EmployeeModel[]= [];
    employees.forEach((employee) => {
        var tempEmployee: EmployeeModel = {
            name: employee.name,
            position: employee.position,
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
        allGoals.forEach((element: GoalModel) => {
            if (element.name == tempEmployee.name && tempEmployee.goals !== undefined) {
                tempEmployee.goals.push(element);
            }
        });
        allNotes.forEach((element: OneOnOneModel) => {
            if (element.name == tempEmployee.name && tempEmployee.oneOnOnes !== undefined) {
                tempEmployee.oneOnOnes.push(element);
            }
        });
        allEmployees.push(tempEmployee);
    });
    return allEmployees;
}

export function getMockOneOnOnes(): OneOnOneModel[] {
    var allNotes: OneOnOneModel[] = [];
    notes.forEach(item => {
        var tempNotes: OneOnOneModel = {
            name: item.name,
            meetingDate: new Date(item.meetingDate),
            notes: item.notes
        };
        allNotes.push(tempNotes);
    });
    return allNotes;
}

export function getMockReviews(): EmployeeReviewModel[] {
    var allReviews: EmployeeReviewModel[] = [];
    reviews.forEach(item => {
        var tempReview: EmployeeReviewModel = {
            name: item.name,
            reviewDate: new Date(item.reviewDate),
            employeeReviewFeedback: item.employeeReviewFeedback
        };
        allReviews.push(tempReview);
    });
    return allReviews;
}

export function getMockFeedback(): FeedbackModel[] {
    var allFeedback: FeedbackModel[] = [];
    feedback.forEach(item => {
        var tempFeedback: FeedbackModel = {
            name: item.name,
            type: item.type,
            feedbackContent: item.feedbackContent
        };
        allFeedback.push(tempFeedback);
    });
    return allFeedback;
}

export function getMockGoals(): GoalModel[] {
    var allGoals: GoalModel[] = [];
    goals.forEach(item => {
        var tempGoal: GoalModel = {
            name: item.name,
            title: item.title,
            description: item.description,
            dueDate: new Date(item.dueDate)
        };
        allGoals.push(tempGoal);
    });
    return allGoals;
}