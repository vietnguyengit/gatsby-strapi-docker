module.exports = {
    apps: [
        {
            name: '', // Your project name
            cwd: './', // Path to your project
            script: 'yarn', // For this example we're using npm, could also be yarn
            interpreter: '/bin/bash',
            args: 'start', // Script to start the Strapi server, `start` by default
            env: {
                APP_KEYS: '', // you can find it in your project .env file.
                API_TOKEN_SALT: '',
                ADMIN_JWT_SECRET: '',
                JWT_SECRET: '',
                NODE_ENV: 'production',
                DATABASE_HOST: '', // database Endpoint under 'Connectivity & Security' tab
                DATABASE_PORT: '',
                DATABASE_NAME: '', // DB name under 'Configuration' tab
                DATABASE_USERNAME: '', // default username
                DATABASE_PASSWORD: '',
                AWS_ACCESS_KEY_ID: '',
                AWS_ACCESS_SECRET: '', // Find it in Amazon S3 Dashboard
                AWS_REGION: '',
                AWS_BUCKET_NAME: '',
            },
        },
    ],
};
