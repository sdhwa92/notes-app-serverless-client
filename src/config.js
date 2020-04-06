const dev = {
  STRIPE_KEY: "pk_test_XsL6itzvi2Nv5QI6hAk53CCf",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-189dn9z7xm8i6"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://api.iamdaehwa.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_McIDR6FTU",
    APP_CLIENT_ID: "31jhupstc330r3na9b1prq2s5c",
    IDENTITY_POOL_ID: "ap-southeast-2:56ca4e4a-5dc1-44d2-a3f6-4b41d43bb64f"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_XsL6itzvi2Nv5QI6hAk53CCf",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-xi8irmy5dr5q"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://api.iamdaehwa.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_SfCOXJs2F",
    APP_CLIENT_ID: "6oivgqrag9ov97ah55lgdqi180",
    IDENTITY_POOL_ID: "ap-southeast-2:81d89d3a-6db5-4cce-8a1a-bcf3aa74cefb"
  }
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
