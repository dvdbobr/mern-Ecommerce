const usersModel = require('../models/users.model');


const getUsers = async (req, res) => {
    try {
        const users = await usersModel.find({})
        return res.send(users);
    }
    catch (err) {
        return res.send(`error:${err}`);
    }
}

const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const user = new usersModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        await user.save()
        const token = await user.generateAuthToken()
        return res.json({ "created successfully": { user, token } })
    }
    catch (err) {
        return res.status(400).send(`error:${err}`)
    }
}
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await usersModel.findByCredentials(email, password)
        const token = await user.generateAuthToken()
        res.send({ msg: 'login successful', user: user.getPublicProfile() })
    }
    catch (err) {
        console.log(err)
        res.status(400).send(`error:${err}`)
    }
}
const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send({ msg: 'you have successfully logged out' })
    }
    catch (err) {
        res.status(500).send(err)
    }
}
const getMyUser = async (req, res) => {
    try {
        const user = await usersModel.findById(req.user._id)
        if (!user) return res.status(400).json({ msg: "User doesn't exist" })
        return res.send(req.user)
    }
    catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
module.exports = {
    register,
    getUsers,
    login,
    logout,
    getMyUser,
}