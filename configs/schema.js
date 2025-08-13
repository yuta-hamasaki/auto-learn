import { pgTable, serial, varchar, boolean, json, text, integer } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable('users',{
  id: serial().primaryKey(),
  userName: varchar().notNull(),
  email: varchar().notNull(),
  isMember: boolean().default(false)
})
export const STUDY_MATERIAL_TABLE = pgTable("studyMaterial", {
  id: serial().primaryKey(),
  courseId: varchar().notNull(),
  courseType: varchar().notNull(),
  topic: varchar().notNull(),
  difficultyLevel: varchar().default("Easy"),
  courseLayout: json(),
  createdBy: varchar().notNull(),
  status: varchar().default('Generating')
});

export const CHAPTER_NOTES_TABLE = pgTable('chapterNotes', {
    id: serial().primaryKey(),
    courseId: varchar().notNull(),
    chapterId: integer().notNull(),
    notes: text()
})

export const STUDY_TYPE_CONTENT_TABLE = pgTable('studyTypeContent', {
  id: serial().primaryKey(),
  courseId: varchar().notNull(),
  content: json(),
  type: varchar().notNull(),
  status: varchar().default('Generating')
})