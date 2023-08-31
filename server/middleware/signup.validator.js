exports.signUpValidator = (req, res, next) => {
    const { name, email, password, bio, username, avatar } = req.body;

    if (name && email && password && bio && username && avatar) {
        next()
    }
    else {
        res.status(404).send({ msg: "all Input Fields are requireds" })
    }
}