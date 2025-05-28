import type { Config } from "drizzle-kit";

process.loadEnvFile()

export default {
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
    dialect: "turso",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_AUTH_TOKEN,
    },
} satisfies Config;