import express from "express";
import {
  createTours,
  getAllTours,
  getTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";
const router = express.Router();

router.route("/").get(getAllTours).post(createTours);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export default router;
