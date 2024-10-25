export type RouteType = {
    path: string,
    component: ({routeParams}: {routeParams?: RouteParamsType}) => JSX.Element
}

export type RouteParamsType = {
    query: string
}