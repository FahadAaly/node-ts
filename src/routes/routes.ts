import express, {Router} from "express";
import {test, addSuggestions} from "../controllers/SuggestionsController";

const router: Router = express.Router();
router.get("/", test);
router.post("/suggestions", addSuggestions);

export default router;
