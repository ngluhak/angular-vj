export interface Hero {
    id: number;
    name: string;
    length?: number; //opcionalni property koji se ne mora iskoristiti 
    getSalary?: () => number; //opcionalna funkcija koja niš ne prima, a izbacuje number
}