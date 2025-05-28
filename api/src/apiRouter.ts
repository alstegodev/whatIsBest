import express from "express";
import {createUser} from "./db/queries/users.js";

const apiRouter = express.Router();

apiRouter.get("/ping", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send("pong");
})

apiRouter.post("/users", async (req, res) => {
    const user: {name: string} = req.body

    const newUser = await createUser({
        name: user.name,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
    })

    res.json(newUser)
})

export default apiRouter;