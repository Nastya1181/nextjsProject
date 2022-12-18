export default async function handler(req, res) {
    const mongo = require("mongodb").MongoClient;
    const url = "mongodb://localhost:27017/";
    const parsedBody = JSON.parse(req.body);
    try {
        const db = await mongo.connect(url);
        await db.db("testSystem").collection("results")?.replaceOne({testId: parsedBody.testId}, parsedBody, {upsert: true})
        res.status(200);
        res.end();
        db.close();
      } catch (err) {
        console.log(err);
      }
  }
  