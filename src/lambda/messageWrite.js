import mongoose from "mongoose";
import db from "./server"; // Load the server
import Message from "./Message"; // Load the Message Model

exports.handler = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        const message = new Message();
        if(!event.body) {
            return callback(null, {
                headers: { "Access-Control-Allow-Origin": "*" },
                statusCode: 400,
                error: "You must provide some text.",
            });
        }
        message.body = event.body;
        message.date = Date.now().toString();

        await message.save();
        return callback(null, {
            headers: { "Access-Control-Allow-Origin": "*"},
            statusCode: 200,
            body: "Successfully Written"
        });
    } catch (err) {
        return callback(null, {
            statusCode: 500,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({msg: err.message}),
        });
    }
}