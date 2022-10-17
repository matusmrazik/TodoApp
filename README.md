# Todo app

## **Original assignment**

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

## **My solution**

First, I added eslint for code style and errors checking. I also added prettier for code formatting with rules that I usually use. The problems I found are:

1. In `App.tsx`, when rendering the `Todo` components, there is no `key` prop defined for the todo items.
2. In some places, `var` was used to declare variables, which is an old way of declaring variables, `let` and `const` are safer and can reduce runtime errors.
