export interface Student {
    id?: string;
    name: string;
    age: number;
    marker: string;
    gender: 'male' | 'female';
    city: string;

    createdAt?: number;
    updatedAt?: number;
}