# contentful-awslambda-webhookparser
Contentful currently only supports triggering webhooks for publishing any content model.
This AWS lambda snippet parses the webhook and only forwards the call only if certain contentmodels are published.

## Setup

1. Create a [lambda](https://aws.amazon.com/lambda/) and [api gateway](https://aws.amazon.com/api-gateway/) in AWS.
2. Add the ids for the content models you wish to trigger the build for.
3. Set the path for the outgoing webhook.
4. Set up the Contentful webhook to trigger the API gateway
