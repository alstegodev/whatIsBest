import {drizzle} from 'drizzle-orm/libsql'
import {createClient} from "@libsql/client";

process.loadEnvFile()

const turso = createClient({
    url: envOrThrow("DATABASE_URL"),
    authToken: envOrThrow("DATABASE_AUTH_TOKEN")
});

export const db = drizzle(turso);

function envOrThrow(key: string) {
    if (process.env[key] === undefined) {
        throw new Error(`Missing env var ${key}`)
    } else {
        return process.env[key]
    }
}