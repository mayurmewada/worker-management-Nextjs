import dbConnect from "../../utils/dbConnect";
import Worker from "../../models/Worker";

dbConnect();

export default async (req, res) => {
  res.json({ status: true, test: "test" });
};
