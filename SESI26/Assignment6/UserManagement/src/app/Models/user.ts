export interface User {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export interface UserForm {
    Title: string;
    FirstName: string;
    LastName: string;
    Role: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
};