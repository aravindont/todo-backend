# TODO App Backend

## ⚙ Tools and Technologies used

1. [Node.js](https://nodejs.org/en/)
2. [Express.js](https://expressjs.com/)
3. [MongoDB](https://www.mongodb.com/)

## 🛠 Installation and setup

- First clone the project `git clone git@github.com:aravindont/todo-backend.git`
- Install all the necessary packages using `npm install`
- Now run the command `npm run devStart`
- And you should see the below message in the browser at url `http://localhost:8000`

```javascript
{
  "message": "Namaste"
}
```

## Todo Database Schema

| Field  | Type                   | Use                                       |
| ------ | ---------------------- | ----------------------------------------- |
| title  | String                 | To store the todo titles                  |
| tasks  | Array of String values | To store the tasks                        |
| userId | String                 | To store the userId of the logged in user |

## API Endpoints

- baseURL=http://localhost:8000

| Endpoint             | Use                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| baseURL/todo         | At this endpoint we can create,delete,edit todos by making POST,DELETE,PUT HTTP requests respectively                        |
| baseURL/todo/:userId | At this endpoint we can get all the todos of the perticular user for example logged in user make making the GET HTTP request |
| baseURL/task         | At this endpoint we can create,delete,edit tasks by making POST,DELETE,PUT HTTP requests respectively                        |
| baseURL/search       | At this endpoint we can make HTTP GET request to get the search results from the frontend                                    |

## NPM Packages used

| package name | version | use                                                                                                                                               |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| express      | 4.18.2  | expressjs is the nodejs framework i used it build the API                                                                                         |
| dotenv       | 16.0.3  | helps to keep sensitive information such as API keys, database passwords, etc. `.env` file should be craeted to store the `environment` variables |
| mongoose     | 6.9.0   | mongoose is ORM(object relational mapper) which helps to connect to database perform the CRUD operation                                           |
| cors         | 2.8.5   | CORS(Cross Origin Resource Sharing) this package helps in making cross origin requests from frontend to backend                                   |
| nodemon      | 2.0.20  | It is usefull to refresh the server automatically it is added as the dev dependency                                                               |
