import express from "express";
import contributedProjectsController from "../../controllers/user projects/contributedProjects.controller";

const router = express.Router();
router.use(express.json());

router.post("/fetchProjects", contributedProjectsController.fetchProjects);
router.get(
  "/fetchProject/:Id",
  contributedProjectsController.fetchProjectById
);

export default router;
