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
    title: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    password: string;
    confirmPassword: string;
};