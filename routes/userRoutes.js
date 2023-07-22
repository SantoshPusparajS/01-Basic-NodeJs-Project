import express from "express";
import {
  getAllUsers,
  getUser,
  CreateUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/api/v1/users").get(getAllUsers).post(CreateUsers);
router
  .route("/api/v1/users/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

export default router;
