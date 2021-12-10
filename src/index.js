import customExpress from "./config/customExpress.js";
import dotenv from "dotenv";

dotenv.config();
const { PORT } = process.env;

const app = customExpress();
app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
