import express from "express";
import cors from "cors";
import path from "path";
import projectRoutes from "./routes/project.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/files",
  express.static("uploads")
);

console.log("Static path:", path.resolve(__dirname, "..", "..", "uploads"));

app.use("/projects", projectRoutes);

export default app;