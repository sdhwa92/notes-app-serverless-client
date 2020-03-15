export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "daehwa-notes-app-uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://yet74np3rc.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_mWJjaPj2O",
    APP_CLIENT_ID: "1he21n7fqbn4g47bufnsogknnd",
    IDENTITY_POOL_ID: "ap-southeast-2:0b0465d5-5cb3-4bc3-8fee-0f6ef69e3c79"
  }
}
