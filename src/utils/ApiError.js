class ApiError extends Error {
    constructor(statusCode, message, errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.message = message ||"Something went wrong";
        this.data = null;
        this.success = false;
        this.errors = errors;
        this.stack = stack;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export default ApiError;
