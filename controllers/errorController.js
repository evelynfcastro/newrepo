exports.triggerError = (req, res, next) => {
    try {
        throw new Error("This is an intentional server error.");
    } catch (error) {
        next(error); // Pass the error to middleware
    }
};