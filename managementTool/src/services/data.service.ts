import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { EmployeeModel } from '../models/employee.model';
import type { EmployeeReviewModel } from '../models/review.model';
import type { FeedbackModel } from '../models/feedback.model';
import type { GoalModel } from '../models/goal.model';

export async function getManagers(): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('managers')
        .select();

    return data;
}

export async function getEmployees(): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('employees')
        .select();

    return data;
}

export async function addManager() {
    const supabase = createSupabaseClient();
    const { error } = await supabase
        .from('managers')
        .insert({ first_name: "Kendra", last_name: "Arnold" });
}

export async function getReviews(employee: EmployeeModel | undefined): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    var firstName = employee?.name.split(' ')[0];
    var lastName = employee?.name.split(' ')[1];
    const { data, error } = await supabase
        .from('reviews')
        .select(`
            *,
            employees(*)
        `)
        .eq('employees.first_name', firstName)
        .eq('employees.last_name', lastName);

    return data;
}

export async function getFeedback(employee: EmployeeModel | undefined): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    var firstName = employee?.name.split(' ')[0];
    var lastName = employee?.name.split(' ')[1];
    const { data, error } = await supabase
    .from('feedback')
    .select(`
        *,
        employees(*)
    `)
    .eq('employees.first_name', firstName)
    .eq('employees.last_name', lastName);

    return data;
}

export async function getGoals(employee: EmployeeModel | undefined): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    var firstName = employee?.name.split(' ')[0];
    var lastName = employee?.name.split(' ')[1];
    const { data, error } = await supabase
    .from('goals')
    .select(`
        *,
        employees(*)
    `)
    .eq('employees.first_name', firstName)
    .eq('employees.last_name', lastName);

    return data;
}

export async function getOOONotes(employee: EmployeeModel | undefined): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    var oooIds: number[] = [];
    var notes: any;
    var firstName = employee?.name.split(' ')[0];
    var lastName = employee?.name.split(' ')[1];
    var { data, error } = await supabase
        .from('ooos')
        .select(`
            *,
            employees(*)
        `)
        .eq('employees.first_name', firstName)
        .eq('employees.last_name', lastName);
    if (data != null)  {
        data.forEach((ooo) => {
            oooIds.push(ooo.id);
        });
        notes = getNotesFromOOOs(oooIds);
    }
    return notes;
}

export async function addFeedback(newFeedback: FeedbackModel) {
    const supabase = createSupabaseClient();
    var firstName = newFeedback?.name.split(' ')[0];
    var lastName = newFeedback?.name.split(' ')[1];
    const { data, error } = await supabase
        .from('employees')
        .select("id")
        .eq('first_name', firstName)
        .eq('last_name', lastName);
    // return data;
    if (data !== null) {
        const { error } = await supabase
            .from('feedback')
            .insert({ type: newFeedback.type, content: newFeedback.feedbackContent, employee_id: data[0].id })
    }
}

export async function addGoal(newGoal: GoalModel) {
    const supabase = createSupabaseClient();
    var firstName = newGoal?.name.split(' ')[0];
    var lastName = newGoal?.name.split(' ')[1];
    const { data, error } = await supabase
        .from('employees')
        .select("id")
        .eq('first_name', firstName)
        .eq('last_name', lastName);
    // return data;
    if (data !== null) {
        const { error } = await supabase
            .from('goals')
            .insert({ title: newGoal.title, description: newGoal.description, employee_id: data[0].id })
    }
}

export async function addReview(newReview: EmployeeReviewModel) {
    const supabase = createSupabaseClient();
    var firstName = newReview?.name.split(' ')[0];
    var lastName = newReview?.name.split(' ')[1];
    const { data, error } = await supabase
        .from('employees')
        .select("id")
        .eq('first_name', firstName)
        .eq('last_name', lastName);
    // return data;
    if (data !== null) {
        const { error } = await supabase
            .from('reviews')
            .insert({ review_feedback: newReview.employeeReviewFeedback, employee_id: data[0].id })
    }
}

export async function addNotes(newNotes: string[], currentEmployee: EmployeeModel) {
    const supabase = createSupabaseClient();
    var firstName = currentEmployee?.name.split(' ')[0];
    var lastName = currentEmployee?.name.split(' ')[1];
    var { data, error } = await supabase
        .from('employees')
        .select("id")
        .eq('first_name', firstName)
        .eq('last_name', lastName);
    
    if (data !== null) {
        var employeeId = data[0].id;
    }
    else {
        return;
    }
    // return data;
    var { data, error } = await supabase
        .from('ooos')
        .insert({ employee_id: employeeId })
        .select('id');
    
    if (data !== null) {
        var newOOOId = data[0].id;
    }
    else {
        return;
    }
    newNotes.forEach(async (note) => {
        var { data, error } = await supabase
            .from('notes')
            .insert({ ooo_id: newOOOId, content:note })
            .select('id')
    });
}

function createSupabaseClient(): SupabaseClient<any, "public", any>  {
    var supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
    var supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return createClient(supabaseUrl, supabaseAnonKey);
}

async function getNotesFromOOOs(ooos: number[]): Promise<any[] | null> {
    const supabase = createSupabaseClient()
    var { data, error } = await supabase
        .from('notes')
        .select()
        .in('ooo_id', ooos);
    return data;
}   