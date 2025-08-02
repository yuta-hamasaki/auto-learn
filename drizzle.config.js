import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: "postgresql://neondb_owner:npg_qKZI3DzOmx0n@ep-red-union-a1gz7tq0-pooler.ap-southeast-1.aws.neon.tech/ai-lms?sslmode=require&channel_binding=require"
  }
});
