import express from "express";
import {createUser} from "./db/queries/users.js";
import {createGame} from "./db/queries/games.js";

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

apiRouter.post("/games", async (req, res) => {
    const game: {name: string, userId: number} = req.body

    const newGame = await createGame({
        name: game.name,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
        userId: game.userId,
    })

    res.json(newGame)
})

export default apiRouter;