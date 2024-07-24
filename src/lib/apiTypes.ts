export type Route = {
    method: "GET" | "POST";
    path: string;
    description: string;
    requiresAuth: boolean;
};

export class ApiRoute {
    path: string;
    method: "GET" | "POST";
    description: string;
    r: boolean = true;

    constructor(p: string, m: "GET" | "POST", d: string, r: boolean = true) {
        this.path = p;
        this.method = m;
        this.description = d;
        this.r = r;
    }

    async toRoute() {
        "use server";

        return {
            method: this.method,
            path: this.path,
            description: this.description,
            requiresAuth: this.r,
        };
    }
}
