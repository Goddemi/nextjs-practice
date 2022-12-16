// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;
    //req.query <-- get요청
    const feedbackData = {
      id: new Date(),
      email,
      feedback,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(feedbackData);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "good", feedback: feedbackData });
  }

  res.status(200).json({ name: "John Doe" });
}
