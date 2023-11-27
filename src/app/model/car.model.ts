export interface Car {
    id?: number; // optional if the backend assigns the ID
    year: number;
    licensePlate: string;
    model: string;
    color: string;
}
