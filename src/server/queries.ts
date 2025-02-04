import "server-only";
import { db } from "./db";
import { test } from "./db/schema";
import { eq } from "drizzle-orm";

export async function getData(id: number) {
	const testData = await db.query.test.findFirst({
		where: eq(test.id, id)
	});

	if (!testData) throw new Error("Test data not found");

	return testData;
}
