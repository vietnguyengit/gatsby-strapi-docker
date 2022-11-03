module.exports = {
  apps: [
    {
      name: 'myblog', // project name
      script: 'npm',
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: 'keCGwpdo+1VigJlwUrM4vQ==,36yg1RGy2xwuwALVXLqO8A==,qQUfeoI5pJ15f5rD4gNyCA==,nAAgja9cfqWG3HqAW/YRhA==', // you can find it in your project .env file.
        API_TOKEN_SALT: 'U4VVcwGeCbSTD+n35Nz+vA==',
        ADMIN_JWT_SECRET: 'zk1Sv64fHDHbuHP0QNBW/g==',
        JWT_SECRET: 'NabezrQIKQjWrrQeHnP62g==',
        NODE_ENV: 'production',
        DATABASE_HOST: 'myblog.cenezpxh4umh.ap-southeast-2.rds.amazonaws.com', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'myblog', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'postgres', // default username
        DATABASE_PASSWORD: '5EN7ATBQkHIO48qwcwpq',
        AWS_ACCESS_KEY_ID: 'AKIAU56QDQO2M2MNACOQ',
        AWS_ACCESS_SECRET: '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', // Find it in Amazon S3 Dashboard
        AWS_REGION: 'ap-southeast-2',
        AWS_BUCKET_NAME: 'vietnguyen-myblog',
      },
    },
  ],
};
