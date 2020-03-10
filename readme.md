![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Team Reflect Assignment

## Assignment

[Full description is here](assignment.md)

## Getting Started

To run the task for development, run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

## Notes

### Passion

`Stencil` is really nice tool for building and maintaining of web components. Pretty impressed how fast it can be learned as well as how many integrations it has. 

I was so passioned about learning `Stencil` (components, listeners, unit and e2e tests), so probably went a little into to much details, resulting in a little bigger codebase and time.

Code beauty in my opinion consists of simplicity, readability, maintainability and optimisation. 

As of styling - added form animation on successful submit.

Had multiple challenges, unresolved ones are mentioned in `Todos`. 

### Estimation of working hours

Most of the time I spent for learning how to develop with Stencil and related challanges.

I could have made assignment simpler with styling and unit/e2e tests.

- Read Stencil documentation - 1h
- Implement From and Input components - 2h
- Implement Styling - 1h
- Add Unit and E2E tests - 1h
- Fixing bugs and other challenges - 1h

### Attention points

- Component documentation
- Components and classes namings
- Components are fully isolated using shadow-dom
- Styles are constructed with Sass and easy adjustable using variables 

### Improvements

- From the UX perspective in my opinion better:
  - Submit button should be always active
  - Validation happens on submit
  - Better performance - validation happens once instead of per every keypress
  - On Submit click with invalid inputs:
    - focus on first invalid input
    - show validation captions per every input
- Add CSS cross-browser compatibility (e.g. with Webpack plugins)

### Challenges / Todo's

- Investigate why globalStyles are not applied in `stencil.config.js` (used `index.html` incline styles instead)
- Investigate `waitForChanges()` error in `reflect-input.e2e.ts`
- Investigate why button is disabled in `reflect-form.e2e.ts`
