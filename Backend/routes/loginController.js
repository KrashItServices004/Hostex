
const express = require('express')
const app = express()
const cors = require('cors');
const HostexLoginmodal = require('../modal/hostexLoginmodal');
app.use(cors())

const router = express.Router();


router.post('/createAccount', async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const existingData = await HostexLoginmodal.findOne({ email });
        if (existingData) {
            return res.status(400).send({ error: 'email already exists' });
        }
        else {

            const newDoc = new HostexLoginmodal({ name: name, email: email, password: password });

            await newDoc.save();

            res.status(200).json({ message: 'create account  successfully' });
        }
    } catch (error) {
        console.error('Error create account:', error);
        res.status(500).json({ error: 'Failed create account' });
    }
});

router.post('/ForgotPassword', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingData = await HostexLoginmodal.findOne({ email });
        if (!existingData) {
            return res.status(400).send({ error: 'Email does not exist' });
        } else {
            // Update the password
            existingData.password = password;
            await existingData.save();

            res.status(200).json({ message: 'Password updated successfully' });
        }
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: 'Failed to update password' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingData = await HostexLoginmodal.findOne({ email });
        if (existingData) {
            if (existingData.password === password) {

                res.status(200).json(existingData);
            }
            else {
                res.status(500).json({ error: 'invalid  password' });

            }
        }else{
            res.status(500).json({ error: 'Email not exist' });
        }

    } catch (error) {
        console.error('Error create account:', error);
        res.status(500).json({ error: 'Failed login account' });
    }
});





module.exports = router
