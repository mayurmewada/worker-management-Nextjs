import dbConnect from "../../../utils/dbConnect";
import Worker from "../../../models/Worker";

dbConnect();
console.log(dbConnect());

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const worker = await Worker.findById(id);

        if (!worker) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: worker });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const worker = await Worker.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!worker) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: worker });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteWorker = await Worker.deleteOne({ _id: id });

        if (!deleteWorker) {
          return res.status(200).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
