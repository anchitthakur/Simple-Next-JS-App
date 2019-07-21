const withOffline = require('next-offline');


module.exports = withOffline({
    target: 'server',
    exportPathMap: function () {
        return {
            '/': {page: '/'},
            '/About': {page: '/About'},
            '/ApiPages': {page: '/ApiPages'}
        };
    },
    workboxOpts: {
        runtimeCaching: [
            {
                urlPattern: /ApiPages/,
                handler: 'StaleWhileRevalidate',
            },
            {
                urlPattern: /.*/,
                handler: 'CacheFirst',
            },
        ]
    }
});