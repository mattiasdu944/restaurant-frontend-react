export interface User {
    id:        string;
    name:      string;
    email:     string;
    roles:     "ADMIN" | "POS";
    createdAt: Date;
    updatedAt: Date;
}
