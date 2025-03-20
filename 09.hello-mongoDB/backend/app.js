import express from "express";
import cors from "cors";
import { readUsers } from "./crud-read.js";
import { createUsers } from "./crud-create.js";
import { deleteUsers } from "./crud-delete.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/list", async (req, res) => {
  try {
    const users = await readUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

app.post("/add", async (req, res) => {
  try {
    await createUsers(req.body);
    res.status(200).json({
      message: "success",
    });
  } catch (e) {
    res.status(501).json({
      message: "fail",
    });
  }
});

app.delete('/delete/:id', async(req, res) => {
  try {
    await deleteUsers({employee_id: req.params.id})
    res.status(200).json({
      message:'success'
    })
  } catch (e) {
    res.status(501).json({
      message: "fail"
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
