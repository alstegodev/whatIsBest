import {games, NewGame, NewUser, users} from "../schema.js";
import {db} from "../index.js";

export async function createGame(game: NewGame)  {
    const [result] = await db.insert(games)
        .values(game)
        .onConflictDoNothing()
        .returning()

    return result;
}