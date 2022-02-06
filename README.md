# Formpl.us Front End Test 

## Assumptions 
- Sorting was performed on the `name` field.
- Filtering by `category` was performed on the `name` or `description` fields, anyone that returned a match.
  
## Reusability
- I used the functional programming concept of pure functions to create the helper functions in `utils` folder. Pure functions have no side effects, hence they always return the same out for given inputs. The are also easy to test and very predictable.
- I tried not to use comments, code should be self explanatory, unless the business logic is complicated.

## Other points to note
- I used ESLint airbnb standard, which enforced some design choices like using JSX extensions, exporting default when there is only one `const` in a file and had to suppress it on the slice page. Besides that all the other recommendations were followed.
- React does not enforce structure, instead it is up to the developers or architect to decide on how they want to structure their code. I have gone for the feature style, and I think it can be extended. 
- This is my first time of working with `@redux/toolkit`, and I find it very accessible.
- Some times the app throws a No 'Access-Control-Allow_Origin' header error. All you have to do is refresh the browser.
- The sorting by date is not obvious because dates were not rendered.
- In a real-world scenerio, the `utils` functions should all be tested, because they contain crucial business logic, and they have been designed to be easily testable.
- The select fields can be further abstracted to use only one reusable component. Since that wasn't done, I made them almost stateless thereby increasing their reusability and clarity.

## Testing
- I demonstrated a test of business logic.
- I prefer end to end tests with cypress or selenium or more recently playwrite