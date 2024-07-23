export type Route = {
    method: "GET" | "POST";
    path: string;
    description: string;
};

export class ApiRoute {
    path: string;
    method: "GET" | "POST";
    description: string;

    constructor(p: string, m: "GET" | "POST", d: string) {
        this.path = p;
        this.method = m;
        this.description = d;
    }

    async toRoute() {
        "use server";

        return {
            method: this.method,
            path: this.path,
            description: this.description,
        };
    }
}
