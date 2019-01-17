class UserInputValidation{
  static userInput(req, res, next){
    const errors = [];
    if(req.body.Region == undefined){
      errors.push('Region is required');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Region === '') {
      errors.push('Region cannot be empty');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Region.length <= 1) {
      errors.push('Length of the Region should be greater than 1 character..');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if(req.body.Branch == undefined){
      errors.push('Branch is required');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Branch == '') {
      errors.push('Branch cannot be empty');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Star == undefined) {
      errors.push('Valid Value is required...');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Star == '') {
      errors.push('Pricee cannot be empty');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Comment == undefined) {
      errors.push('Valid Comment required...');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Comment == '') {
      errors.push('Comment cannot be empty');
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    if (req.body.Comment.length <= 2) {
      errors.push('Category must exceed 2 characters..');
      return res.status(400).send({
        status: 'Errors',
        message: errors
      });
    }
    if (errors.length > 0) {
      return res.status(400).send({
        status: 'Error',
        message: errors
      });
    }
    return next();
  }
}
export default UserInputValidation;