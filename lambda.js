const https = require('https');

exports.handler = (event, context, callback) => {
    // The content models that should trigger the webhook
    const types = ['contentModel1', 'contentModel3'];
    const contentType = event.sys.contentType.sys.id;

    const headers = {
        'Content-Type' : 'application/json'
    };

    const httpsOptions = {
        host: 'circleci.com',
        path: '/api/v1/project/organization/repository/tree/branch?circle-token=XXXXXXX',
        method: 'POST'
    }

    if (types.indexOf(contentType) > -1) {
        const request = https.request(httpsOptions)
        request.end();
        request.on('response', function(response) {
            callback(null, true);
        });
    } else {
        callback(null, false);
    }
};
