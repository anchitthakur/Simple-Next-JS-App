const withOffline = require('next-offline');

const nextConfig = {
    target: 'serverless',
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /(https:\/\/newsapi.org){1}.*/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'Api-calls',
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
            {
                urlPattern: /static\//,
                handler: 'CacheFirst',
            },
            {
                urlPattern: /.*/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'Runtime-caches',
                },
            },
        ],
    },
};

module.exports = withOffline(nextConfig);