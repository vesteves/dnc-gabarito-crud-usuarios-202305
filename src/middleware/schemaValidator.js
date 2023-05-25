// const Joi = require('joi');

module.exports = (schema) => {
    return (req, res, next) => {
        const valid = schema.validate(req.body);
        if (valid.error) {
            return res.status(422).json({
                error: valid.error.details,
                message: 'Error in the body'
            });
        }

        next();
    }
}