import type { FeedbackModel } from './feedback.model';

export interface EmployeeReviewModel {
    reviewDate: Date,
    employeeReviewFeedback: FeedbackModel[]
}