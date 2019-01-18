import express from 'express';
import RatingController from '../controller/ratingController.js';
import UserInputValidation from '../middlewares/inputValidation.js';

const router = express.Router();

router.post('/rating', UserInputValidation.userInput, RatingController.createRating);

router.get('/rating', RatingController.getAllRating);

// catch all invalid routes
router.get('*', (req, res) => res.status(404).json({
  message: 'Invalid Route'
}));
  
router.post('*', (req, res) => res.status(404).json({
  message: 'Invalid Route'
}));


export default router;