import express from 'express';
import RatingController from '../controller/ratingController.js';
import UserInputValidation from '../middlewares/inputValidation.js';

const router = express.Router();

router.post('/rating', UserInputValidation.userInput, RatingController.createRating);

export default router;