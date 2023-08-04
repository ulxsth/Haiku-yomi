import express from "express";
import path from "path";

const port = 8080;
const app = express();
app.use(express.static("dist"));

app.get(/.*/, (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve("dist/index.html"));
});
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
