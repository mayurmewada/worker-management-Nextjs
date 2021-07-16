import dbConnect from "../../../utils/dbConnect";
import Worker from "../../../models/Worker";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const workers = await Worker.find({});

        res.status(200).json({ success: true, data: workers });

        console.log(Worker);
        console.log(workers);
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;

    case "POST":
      try {
        const worker = await Worker.create(req.body);

        res.status(201).json({ success: true, data: worker });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
