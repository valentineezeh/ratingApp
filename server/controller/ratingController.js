import db from '../database/models';

const rating = db.Rating;

class RatingContaoller {
  static createRating(req, res) {
    const { Region, Comment } = req.body;

    const branch = req.body.Branch.trim().toLowerCase();
    const star = req.body.Star.trim().toLowerCase();

    rating.create({
      region: Region,
      branch,
      star,
      comment: Comment,
    }).then(newRating => {
      return res.status(201).json({
        status: true,
        message: 'Rating stored successfully',
        newRating
      });
    }).catch( error => {
      return res.status(500).json(error.message);
    });
  }
}

export default RatingContaoller;