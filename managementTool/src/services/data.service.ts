import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { EmployeeModel } from '../models/employee.model';
import type { EmployeeReviewModel } from '../models/review.model';
import type { FeedbackModel } from '../models/feedback.model';

export async function getManagers(): Promise<any[] | null> {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('managers')
        .select();
    console.log(data);
    console.log(error);

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
    var firstName = employee?.name.split(' ')[0];
    var lastName = employee?.name.split(' ')[1];
    const { data, error } = await supabase
    .from('notes')
    .select(`
        *,
        ooos(*),
        employees(*)
    `)
    .eq('employees.first_name', firstName)
    .eq('employees.last_name', lastName);

    return data;
}

function createSupabaseClient(): SupabaseClient<any, "public", any>  {
    var supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
    var supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;
    return createClient(supabaseUrl, supabaseAnonKey);
}