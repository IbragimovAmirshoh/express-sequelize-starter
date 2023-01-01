const ErrorHandler = (err, _, res) => {
    res.status(err.status).json(err.getErrorInfo());
};

export default ErrorHandler;
