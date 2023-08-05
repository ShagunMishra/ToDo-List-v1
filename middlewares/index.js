async function validateRequestBody (req, res, next) {
    const requestBody = req.body;

    if (!requestBody.newItem) {
        return res.status(400).send(`<h1>A TODO List item was not found in the request body</h1>`);
    } else {
        next(); // Pass the execution to the controllers
    }
}

module.exports = {validateRequestBody};