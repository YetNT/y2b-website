type Methods = "GET" | "POST" | "PUT" | "DELETE";

export type Route = {
    method: Methods;
    path: string;
    description: string;
    requiresAuth: boolean;
};

export class ApiRoute {
    path: string;
    method: Methods;
    description: string;
    r: boolean = false;

    constructor(p: string, m: Methods, d: string, r: boolean = false) {
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

export type RouteRes = { body: {}; status: number };
