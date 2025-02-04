// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { integer, jsonb, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
	(name) => `ryanbarrs-dot-com_${name}`
);

export const test = createTable("test", {
	id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
	data: jsonb("data").notNull()
});
