import mongoose from "mongoose";
import db from "./server"; // Load the server
import Message from "./Message"; // Load the Message Model

exports.handler = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        const count = await Message.estimatedDocumentCount().exec(),
        random = Math.floor(Math.random() * count),
        result = await Message.findOne().skip(random).exec(),
        response = {
            info: "Product successfully found",
            data: result
        }
        return callback(null, {
            statusCode: 200,
            headers: {'Access-Control-Allow-Origin' : '*'},
            body: JSON.stringify(response)
        })
    } catch (err) {
        console.log(err)
        return callback(null, {
            statusCode: 500,
            headers: {'Access-Control-Allow-Origin' : '*'},
            body: JSON.stringify({msg: err.message})
        })
    }
}
