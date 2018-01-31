const AWS = require("aws-sdk");

export const fetchData = (event, context, callback) => {
  const message = JSON.parse(event.Records[0].Sns.Message);

  const s3 = message.Records[0].s3;

  const sourceBucketArn = s3.bucket.arn;
  const sourceObjectKey = s3.object.key;

  callback(null, {
    statusCode: 200,
    body: "Works!"
  });
};
