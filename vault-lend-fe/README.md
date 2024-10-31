# vault-lend-fe

React + TypeScript + react-router-dom application

# TODO

### Forms validation

**react-router-dom** and **react-hook-form** seems to have some overlapping responsibility. As validators such as **zod** seems to mostly rely on **react-hook-form** I am a bit confusing on which direction to go here.

### Forms persistence

A bit related to the problem above, I couldn't find documentation on how to properly use **context** data between **react-router-dom** children routes.

### Forwarding data to backend

As shouldn't be big challenges here, I delayed this functionality, by not having service logic on the backend. It always return the same hardcodade loan proposals.

### Frontend tests

Delayed this functionality. As I have little frontend skills (this is my first time with **tsx**), I decided that starting from tests would delay me too much.

### Missing navigation improvements

- Missing form fields (as I may be able to auto generate forms from a model, I delayed adding all fields)
- Loading feedback
- Proper mouse over on buttons
- A slider for the loan amount
- Something better on the start and end screen
