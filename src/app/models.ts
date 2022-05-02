export interface country {
    country: string
    cases: cases
    population: number
    continent: string
    deaths: deaths
    tests: tests
}

export interface APIResponse<country> {
    response : Array<country>;
}

export interface cases {
    active : number
    critical: number
}

export interface deaths{
    new: number
    total: number
}

export interface tests{
    total: number
}