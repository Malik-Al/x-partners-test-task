class ApiError extends Error{
    constructor(status, message, errors= []) {
        super();
        this.status = status
        this.message = message
        this.errors = errors
    }
    static UserAlreadyExists(){
        return new ApiError(409, 'The user already exists')
    }

    static UnauthorizedError(message, errors){
        return new ApiError(401, message, errors)
    }

    static badRequest(message, errors = []){
        return new ApiError(404, message, errors)
    }

    static internal(message, errors = []){
        return new ApiError(500, message, errors)
    }

    static forbidden(message, errors = []){
        return new ApiError(403, message, errors)
    }
}

module.exports = ApiError