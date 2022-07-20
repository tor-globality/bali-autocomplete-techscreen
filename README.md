We’ve been tasked to create a prototype for a new typeahead select component for the design system that will allow an admin to select users to add to a team.

A colleague has started by creating the following Autocomplete component that is intended to load users from our API endpoint into a selectable dropdown.

Following a TDD approach, several unit tests have been written for you that assert the desired behavior and functionality of the Autocomplete. Let's make all the tests green.

Can you wire up a list builder in our App component that collects users selected from the Autocomplete?

## Requirements

1. Multiple users can be selected from the list of results
2. Users that are already selected do not appear in search results
3. After selecting a user from the results, the search input is cleared to accept a new search
4. A user selected from the results appears in the right-side column

## Followup

-   How can we make the component more reusable or improve the ergonomics?
-   What if we need to support a different data source?
-   How can we support custom rendering of the items in the list?
-   What considerations to we need to take into account for accessibility?

---

## Local Development

Our local environment includes a mock API, using [json-server](https://github.com/typicode/json-server) and small React app, written in TypeScript and served with [vite](https://vitejs.dev);

#### Directory Structure

`dist` contains the compiled `index.html` file where our React app is mounted.

`server` contains the mock `db.json` that defines the list of users available from our API endpoint at `localhost:3000/users`.

`src` contains the files for our React app, including our `index.tsx` entrypoint and the main `App.tsx` component.

`src/components` includes two components rendered by `App` that we will be working with:

-   `Autocomplete`, our primary focus, a typeahead select dropdown
-   `TeamList`, a stub component, that will render our list of selected team members

#### Development Commands

`yarn start` starts the mock API at `localhost:3000` and the React app at `localhost:8080` (on codesandbox.io unique urls are used instead of localhost)

`yarn test` initiates a test run in watch mode
