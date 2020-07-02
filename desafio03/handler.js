'use strict';

module.exports.sum = async event => {
    let a = 0;
    let b = 0;

    if (event.queryStringParameters) {
        if (event.queryStringParameters.a) {
            a = Number(event.queryStringParameters.a);
        }

        if (event.queryStringParameters.b) {
            b = Number(event.queryStringParameters.b);
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                resultado: a + b,
            }
        ),
    };
};
