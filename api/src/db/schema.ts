import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    id: integer("id").primaryKey(),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
    name: text("name").notNull(),
})

export const games = sqliteTable("games", {
    id: integer("id").primaryKey() ,
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
    name: text("name").notNull(),
    userId: integer("user_id").notNull().references(() => users.id, {onDelete: "cascade"}),
})

export const categories = sqliteTable("categories", {
    id: integer("id").primaryKey(),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
    name: text("name").notNull(),
    gameId: integer("game_id").notNull().references(() => games.id, {onDelete: "cascade"}),
})

export const votes = sqliteTable("votes", {
    id: integer("id").primaryKey(),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
    userId: integer("user_id").notNull().references(() => users.id, {onDelete: "cascade"}),
    categoryId: integer("category_id").notNull().references(() => categories.id, {onDelete: "cascade"}),
})

export type NewUser = typeof users.$inferInsert;
export type NewGame = typeof games.$inferInsert;
export type NewCategory = typeof categories.$inferInsert;
export type NewVote = typeof votes.$inferInsert;