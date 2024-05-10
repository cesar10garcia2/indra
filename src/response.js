const responseJsonExito = (status, message, data) => {
    return {
        'statusCode': status,
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON.stringify({
            "success" : true,
            "message" : message,
            "data" : data,
        })
    };
};

const responseJsonError = (status, message, errors='', content='') => {
    return {
        'statusCode': status,
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON.stringify({
            "success" : false,
            "message" : message,
            "errors" : errors,
            "content" : content,
        })
    };
};

module.exports = {responseJsonExito, responseJsonError};