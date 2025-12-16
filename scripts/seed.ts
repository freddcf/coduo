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
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)
        
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

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unidade 1",
                description: "Aprenda o básico de Javascript",
                order: 1
            },
            {
                id: 2,
                courseId: 1,
                title: "Unidade 2",
                description: "Aprenda o básico 2 de Javascript",
                order: 2
            },
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Variable declaration"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Const declaration"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Const declaration"
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Const declaration"
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Const declaration"
            },
            {
                id: 6,
                unitId: 1,
                order: 6,
                title: "Const declaration"
            },
            {
                id: 7,
                unitId: 1,
                order: 7,
                title: "Const declaration"
            },
            {
                id: 8,
                unitId: 1,
                order: 8,
                title: "Const declaration"
            },
            {
                id: 9,
                unitId: 2,
                order: 2,
                title: "Const declaration"
            },
            {
                id: 10,
                unitId: 2,
                order: 3,
                title: "Const declaration"
            },
            {
                id: 11,
                unitId: 2,
                order: 4,
                title: "Const declaration"
            },
            {
                id: 12,
                unitId: 2,
                order: 5,
                title: "Const declaration"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: "Qual dessas é a forma de declarar variáveis globais no Javacript?",
            },
            {
                id: 2,
                lessonId: 8,
                type: "SELECT",
                order: 2,
                question: "Qual dessas é a forma de declarar variáveis globais no Javacript?",
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, // "Qual dessas é a forma de declarar variáveis globais no Javacript?"
                imageScr: "/images/man.svg",
                correct: true,
                text: "el hombre",
                audioSrc: "/images/es_man.mp3"
            },
            {
                id: 2,
                challengeId: 1, // "Qual dessas é a forma de declarar variáveis globais no Javacript?"
                imageScr: "/images/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/images/es_woman.mp3"
            },
            {
                id: 3,
                challengeId: 1, // "Qual dessas é a forma de declarar variáveis globais no Javacript?"
                imageScr: "/images/robot.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/images/es_robot.mp3"
            },
            {
                id: 4,
                challengeId: 1, // "Qual dessas é a forma de declarar variáveis globais no Javacript?"
                imageScr: "/images/girl.svg",
                correct: false,
                text: "la ninã",
                audioSrc: "/images/es_girl.mp3"
            },
        ])

        console.log("Seeding finished")
    } catch (error) {
        console.error(error)
        throw new Error("failed to seed database")
    }
}

main()