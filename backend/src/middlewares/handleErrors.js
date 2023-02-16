exports.errors = (req, res, next) => {
    try {
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        })
    }
}