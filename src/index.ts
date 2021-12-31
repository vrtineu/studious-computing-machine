import express from "express";
import router from "./routes/index";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "..") });
const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, async () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
