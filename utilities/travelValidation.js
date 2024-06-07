const {body, validationResult} = require('express-validator');

const validator = {}
validator.travelRules = () =>{
    return [
        body('destination')
            .trim()
            .notEmpty()
            .isLength({ min: 2 })
            .withMessage('Please provide a valid destination.')
            .isString(),
        body('transportation')
            .trim()
            .notEmpty()
            .withMessage('Please provide a valid transportation.')
            .isString(),
        body('price')
            .isInt({ min:1})
            .withMessage('Please provide a valid number'),
        body('description')
            .isString()
            .notEmpty()
            .isLength({ min: 5 })
            .withMessage('Please provide a valid description.')

        
    ]
}

validator.validate = (req, res, next) => {

    console.log('Validating travel data');
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = errors.array().map(err => ({
        [err.path]: err.msg
    }));
    console.log(errors)
    // return
    return res.status(400).json({
        errors: extractedErrors
    })
}

module.exports = validator;

