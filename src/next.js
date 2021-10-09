module.exports.middleware = (middleware) => {
    return (req, res) => (
        new Promise((resolve, reject) => {
            middleware(req, res, result => (
                result instanceof Error 
                    ? reject(result) 
                    : resolve(result)
            ))
        })
    )
}