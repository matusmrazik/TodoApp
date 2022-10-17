# Todo app

## **Original assignment**

Here is sample code that is not by far ideal.

1. [x] Refactor code to production-grade quality.
2. [x] Find and describe bugs and issues.
3. [ ] Add styling by your choice. (You can add styling library)
4. [ ] Demonstrate connection to backend API.
5. [ ] Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. [x] Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. [ ] Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

## **My solution**

First, I added eslint for code style and errors checking. I also added prettier for code formatting with rules that I usually use. The problems I found are:

1. In `App.tsx`, when rendering the `Todo` components, there is no `key` prop defined for the todo items.
2. In some places, `var` was used to declare variables, which is an old way of declaring variables, `let` and `const` are safer and can reduce runtime errors.
3. `any` was used in some places, which should be avoided as much as possible, especially when declaring props type of a component.
4. Naming of some variables is not very expressive, for example `state` in `App` component, or `todo` prop in `Todo` component.
5. The type of TODO item data is declared explicitly as `{ id: string; title: string }` in multiple places, which creates opportunity for errors. The type should be declared once and reused when needed.
6. `useEffect` in `App` component has no `deps` defined, which causes the todo items to be refetched on each re-render.
7. Also, `setState` is used incorrectly, it is called for each item that was fetched, and uses the `state` variable. This causes the `state` to be updated with only the last item. Correct way to update `state` is to call `setState` with update function as parameter (which has the current state as first parameter). Or, even better, since we're fetching all the items, just assign the value to the state.
8. `async` function in `useEffect` can be rewritten using promise syntax (`then`), and we need to check whether the component hasn't been unmounted by the time we received the response data. We could also use some kind of loading info for the API call.
9. `shouldComponentUpdate` in `Todo` uses `!=` for comparison of whole `props` objects, which will be always `true`. A better way to handle this would be to check if each value is different (so `this.props.todo.id !== prevProps.todo.id` etc.). Another way to handle this is to not pass the whole object to `Todo` component as one prop, but use each value as a separate prop. Then we can change `Todo` to a pure component and get rid of `shouldComponentUpdate` completely.
10. `handleOnClick` in `Todo` needs to be defined as an arrow function if we are using the component's props in it (or bind `this` explicitly).
