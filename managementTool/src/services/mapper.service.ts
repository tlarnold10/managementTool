import type { EmployeeModel } from '../models/employee.model';
import type { FeedbackModel } from '../models/feedback.model';
import type { GoalModel } from '../models/goal.model';
import type { OneOnOneModel } from '../models/one-on-one.model';
import type { EmployeeReviewModel } from '../models/review.model';

export function mapEmployees(data: any[] | null): EmployeeModel[] {
    var employees: EmployeeModel[] = [];
    if (data !== undefined && data !== null) {
        data.forEach((item) => {
            var employee = {
                name: item.first_name + " " + item.last_name,
                position: item.position
            };
            employees.push(employee);
        });
    }
    return employees;
}

export function mapReviews(data: any[] | null): any[] | null {
    var reviews: EmployeeReviewModel[] = [];
    if (data !== undefined && data !== null) {
        data.forEach((item) => {
            var review = {
                name: item,
                reviewDate: item.review_date,
                employeeReviewFeedback: item.review_feedback
            };
            reviews.push(review);
        });
    }
    return reviews;
}

export function mapFeedback(data: any[] | null): any[] | null {
    var feedbacks: FeedbackModel[] = [];
    if (data !== undefined && data !== null) {
        data.forEach((item) => {
            var feedback = {
                name: item.first_name + " " + item.last_name,
                type: item.type,
                feedbackContent: item.content
            };
            feedbacks.push(feedback);
        });
    }
    return feedbacks;
}

export function mapGoals(data: any[] | null): any[] | null {
    var goals: GoalModel[] = [];
    if (data !== undefined && data !== null) {
        data.forEach((item) => {
            var goal = {
                name: item.first_name + " " + item.last_name,
                title: item.title,
                description: item.description
            };
            goals.push(goal);
        });
    }
    return goals;
}

export function mapOOONotes(data: any[] | null): any[] | null {
    var OneOnOnes: OneOnOneModel[] = [];
    if (data !== undefined && data !== null) {
        data.forEach((item) => {
            var OneOnOne = {
                name: item.first_name + " " + item.last_name,
                notes: item.content
            };
            OneOnOnes.push(OneOnOne);
        });
    }
    return OneOnOnes;
}