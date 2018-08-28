import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

//   Storage.configure({
//     bucket: config.s3.BUCKET,
//     region: "us-east-1",
//     identityPoolId: config.cognito.IDENTITY_POOL_ID
// });
  const stored = await Storage.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
}