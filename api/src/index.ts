import express, {NextFunction, Request, Response} from 'express'
import morgan from "morgan";
import cookieParser from "cookie-parser";
import createHttpError, {HttpError} from "http-errors";

import apiRouter from "./apiRouter.js";

const app = express()
app.use(morgan('dev'))

const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', apiRouter)

app.use(function(req, res, next) {
    next(createHttpError(404))
})

app.use(function(err: HttpError, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});