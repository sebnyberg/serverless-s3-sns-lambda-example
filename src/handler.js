import AWS from "aws-sdk";
import debug from "debug";

const fetchDataLogger = debug("app:lambda:fetchData");

export const fetchData = async (event, context, callback) => {
  fetchDataLogger("Context:");
  fetchDataLogger(context);

  fetchDataLogger("Target bucket name: ");
  fetchDataLogger(process.env.TARGET_BUCKET_NAME);

  fetchDataLogger("Number of records in event: %o", event.Records.length);

  fetchDataLogger("-----------");
  const message = JSON.parse(event.Records[0].Sns.Message);
  fetchDataLogger(message);

  fetchDataLogger("-----------");
  fetchDataLogger("Number of records in message: %o", message.Records.length);
  const s3 = message.Records[0].s3;
  fetchDataLogger(s3);

  const arn = s3.bucket.arn;
  const objectKey = s3.object.key;

  callback(null, {
    statusCode: 200,
    body: "Works!"
  });
};
