export default async function handler(req, res) {
    const mongo = require("mongodb").MongoClient;
    const url = "mongodb://localhost:27017/";
    const filter = {
      "testId": Number(req.body) //Todo: поменять на get запрос с параметрами
    }
    try {
      const db = await mongo.connect(url);
      const tasks = await db.db("testSystem").collection("tests")?.find(filter).toArray();
      const testInfo = await db.db("testSystem").collection("testInfos")?.find(filter).toArray();
      const result = {
        tasks: tasks,
        duration: testInfo[0].duration,
        name: testInfo[0].name
      }
      res.status(200).json(result);
      db.close();
    } catch (err) {
      console.log(err);
    }
  }
  