1. What is expressJs?
   Ans: ExpressJs is a leightweight nodejs web application framework that is used to build APIs & web servers easily. Express js simplifies the routing, middlewares & request/response management.

2. What is middleware and how do you create middleware in expressJs?
   Ans: Middleware in expressjs is a function that runs before the request reaches to the controller. It can - check & change the response, Add security checks, handle erros, log details.

ex:- app.use((req, res, next) => {
console.log("Middleware created");
next();
})

3. What is the difference between app.use() & app.get() ?
   Ans:

- app.use() is used to handle all the HTTP methods (POST, GET, PUT etc) and also use for applying middlewares.
- app.get() is used to handle only GET requests for specific routes.

4. How to you handles errors in ExpressJs?
   Ans:

- Using try catch.
- Using error handling middlewares.
- Using promise (.catch).
- Using try catch with async await.
- Using validtion npm's .
- Using process.on()

eg: app.use((err, req, res, next =>{
res.status(500).json({ message: err.message});
}))

5. What are request and response object in expressJs?
   Ans:

- req: req contains the data about the HTTP request. (req.body, req.params, req.query).
- res: res is used to send back the data to the client. (res.send(), res.json())

6. How do you handle file uploads in expressJs?
   Ans: Using multer middleware we handle file uploads in expressJs.

ex:
import multer from multer;
const upload = multer({ destination: './uploads'});

app.post('/uploads', upload.single('file), (req, res) => {
res.send("File uploaded successfully");
})

7. Explain route parameters and query parameters ?
   Ans:

- Route Parameter: route params are defined in url. ex: url/:id -> req.params.id
- Query Parameter: query params comes after ?. ex: /search?q=books -> req.query.q

8. How do you structure the Express App?
   And: making folder str

9. What is the purpose of body-parser or express.json()?
   Ans: The purpose of body-parser is to parse the incoming JSON request bodies and make them accessible via req.body. Modern expressjs uses express.json() by default.

10. How do you implement Authentication in ExpressJs?
    Ans: We use jwt to implement authentication in expressjs.
    ex:
    import jwt from "jsonwebtoken";
    const token = jwt.sign({userId}, process.env.SECRET);
    req.headers.authrorization = `Bearer ${token}`

11. How do you secure APIs using middleware?
    Ans: by checking the presence of token through middleware.

ex:
const auth = (err, req, res, next) => {
const token = req.headers?.authorization?.split(" ")[1];
if (!token) return res.status(403).json({message: "Unathorized"});
next();
}

app.use(auth)

12. How do you handle CORS in express?
    Ans: using CORS npm package we use it as a middleware
    ex:
    import cors from "cors";
    app.use(cors())

13. How can you set up custom headers?
    Ans: using res.set('header-name', value) to set custom headers.

14. Explain the request lifecycle in Express?
    Ans:

- Request hits the server.
- Middleware runs.
- Route runs.
- Controllers (response sent to the client).
- Error handle by middleware.

15. What is next() in middleware?
    Ans: next() is used to pass the controller to the next middleware.

16. How do you serve static files in expresss?
    Ans: To serve static files in JS we must use app.use('/static', express.static('public'))

17. What are the different types of module we have in nodejs ?
    Ans:

- Built-in modules: provided by nodejs. (fs, http, path)
- User defined modules: Custom modules that we create in seprate .ts/.js files and export it using module.exports
- Third party modules: installed via npm (express, mongoose, loadash)

18. How do you handle erros in async/await in nodejs?
    Ans: Using try..catch.

19. What are process.nextTick() and setImmediate() ?
    Ans:

- process.nextTick(): process.nextTick() executes the callback before the next event loop iteration, immediately after the current operation completes.

- setImmediate(): setImmediate executes the callback in the next iteration of event loop , after I/O events.

20. What is nodejs and why it is used in MERN & How does it work?
    Ans: Nodejs is a JS runtime which is built in chrome v8 engine. It allows to run JS in server side. In the MERN stack nodejs is used to handle the backend login and APIs that connect the FE with the DB.

21. What is event loop?
    Ans: Event loop in nodejs is a mechanism that handles the asynchronous operations. Instead of blocking the whole program while waiting for the long tasks like reading files or db queries, Nodejs uses the event loop to handle them in the background and continue running other code. This makes nodejs non-blocking and efficient.

22. What is the purpose of .env & How to handle environment variables in Nodejs?
    Ans: The purpose of .env is to store sensitive information like API key, DB host etc. We use to handle variable in following way:
    DB_HOST = 123.12.1.45
    to use it in our source code we can use it like process.env.DB_HOST

23. How do you handle large file uploads in nodejs?
    Ans: For handling large file upload in nodejs we can use streming and specialized middlewares like multer. We can also handle large files in chunks to avoid the memory overflow.

24. How does asynchronous programing works in nodejs ?
    Ans: Asynchronous programming in nodejs allows long tasks to run on the background without blocking the other operations, using callbacks, async-await promise and most imp with the event loop.
