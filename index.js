import express from "express";

const app = express();
app.use(express.json());

app.post("/send", async (req, res) => {
  const webhook = "https://discord.com/api/webhooks/1489628749627396380/Jvo6Rp8TlaYZH5pNS-o-cyBockETnHGc1JhK1hGgLC27YAus02O5RQjH7lMmrCWHhevx";

  try {
    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    res.send("sent");
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
});

app.listen(3000, () => console.log("Server running"));
