const app = require('../../src/app');

exports.handler = async (event, context) => {
    return new Promise((resolve, reject) => {
        app(event, context, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    statusCode: res.statusCode,
                    body: res.body.toString(),
                });
            }
        });
    });
};