const customExpress = require("./config/customExpress");

const app = customExpress();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
