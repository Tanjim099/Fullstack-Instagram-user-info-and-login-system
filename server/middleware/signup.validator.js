exports.signUpValidator = (req, res, next) => {
    const { name, email, password, bio, username } = req.body;

    if (name && email && password && bio && username) {
        next()
    }
    else {
        res.status(404).send({ msg: "all Input Fields are requireds" })
    }
}