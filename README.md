# TODO App Backend

## How to run this project in local

> To run the code in your system excute the below commands in the terminal

- This project is `scaffolded` using `vite` template
- First clone the project `git clone git@github.com:aravindont/todo-backend.git`
- Install all the necessary packages using `npm install`
- Now run the command `npm run devStart`
- And you should see the below message in the browser at url `http://localhost:8000`

```json
{
  "message": "Namaste"
}
```

## Todo Database Schema

| Field  | Type                   | Use                                       |
| ------ | ---------------------- | ----------------------------------------- |
| title  | String                 | To store the todo titles                  |
| task   | Array of String values | To store the tasks                        |
| userId | String                 | To store the userId of the logged in user |

## API Endpoints

- baseURL=http://localhost:8000

| Endpoint             | Use                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| baseURL/todo         | At this endpoint we can create,delete,edit todos by making POST,DELETE,PUT HTTP requests respectively                        |
| baseURL/todo/:userId | At this endpoint we can get all the todos of the perticular user for example logged in user make making the GET HTTP request |
| baseURL/task         | At this endpoint we can create,delete,edit tasks by making POST,DELETE,PUT HTTP requests respectively                        |
| baseURL/search       | At this endpoint we can make HTTP GET request to get the search results from the frontend                                    |
