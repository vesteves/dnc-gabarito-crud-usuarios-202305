const userModel = require('./user.model');
const userSchema = require('./user.schema');
const validator = require('../../middleware/schemaValidator');

module.exports = (app) => {
    app.get('/user', async (req, res) => {
        const users = await userModel.getUsers();
    
        return res.status(200).json({
            message: 'ok',
            data: users,
        });
    });
    
    app.get('/user/:id', async (req, res) => {
        const user = await userModel.getUser(req.params.id);
    
        return res.status(200).json({
            message: 'ok',
            data: user,
        });
    });
    
    app.post('/user', validator(userSchema.storeUserSchema), async (req, res) => {
        await userModel.storeUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
        });
    
        return res.status(200).json({
            message: 'ok',
        });
    });
    
    app.put('/user/:id', validator(userSchema.updateUserSchema), async (req, res) => {
        await userModel.updateUser(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
        });
    
        return res.status(200).json({
            message: 'ok',
        });
    });
    
    app.delete('/user/:id', async (req, res) => {
        await userModel.deleteUser(req.params.id );
    
        return res.status(200).json({
            message: 'ok',
        });
    });
}