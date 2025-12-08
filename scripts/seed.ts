import "dotenv/config"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"
import { drizzle } from "drizzle-orm/neon-http"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
    try {
        console.log("Seeding database")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "JavaScript",
                imageSrc: "/images/javascript.svg"
            },
            {
                id: 2,
                title: "Java",
                imageSrc: "/images/java.svg"
            },
            {
                id: 3,
                title: "Golang",
                imageSrc: "/images/golang.svg"
            },
            {
                id: 4,
                title: "React",
                imageSrc: "/images/react.svg"
            }
        ])

        console.log("Seeding finished")
    } catch (error) {
        console.error(error)
        throw new Error("failed to seed database")
    }
}

main()