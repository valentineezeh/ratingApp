import db from '../database/models';

const rating = db.Rating;

class RatingContaoller {
  static createRating(req, res) {
    const { Region, Comment } = req.body;

    const branch = req.body.Branch.trim().toLowerCase();
    const star = req.body.Star.trim().toLowerCase();

    if( star > 5){
      return res.status(400).json({
        status: false,
        message: 'Star rating value can only be input value from 0 to 5'
      });
    }
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
  static getAllRating(req, res){
    if(req.query.branch !== null && req.query.region == null){
      const branchRatingList = [];
      rating.findAll({
        where: {
          branch: parseInt(req.query.branch)
        }
      }).then(branchRating => {
        const branch  = parseInt(req.query.branch);
        branchRating.filter((ratings) => {
          if (ratings.branch === branch){
            branchRatingList.push(ratings.star);
          }
        });
        if (branchRatingList.length == 0){
          return res.status(404).json({
            message: 'branch not found'
          });
        }else{
          return res.status(200).json({
            branchId: branch,
            ratings: branchRatingList
          });
        }
      }).catch((error) => {
        res.status(500).json(error.message);
      }
      );
    } if(req.query.region !== null && req.query.branch == null){
      const regionRatingList = [];
      rating.findAll({
        where: {
          region: req.query.region
        }
      }).then(regionRating => {
        const {region} = req.query;
        //console.log('my-region', region);
        regionRating.filter((ratingsRegion => {
          if(ratingsRegion.region === region){
            regionRatingList.push(ratingsRegion.star);
          }
        }));
        if(regionRatingList.length == 0){
          return res.status(404).json({
            message: 'region is not found'
          });
        }else {
          return res.status(200).json({
            region: region,
            ratings: regionRatingList
          });
        }
      }).catch((error) => {
        return res.status(500).json(error.message);
      });
    } else {
      rating
        .all()
        .then((allRating) => {
          return res.status(200).json(allRating);
        });
    }
  }
}

export default RatingContaoller;