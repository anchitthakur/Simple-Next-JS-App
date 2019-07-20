module.exports = {
    target: 'server',
    exportPathMap: function () {
        return {
            '/': {page: '/'},
            '/About': {page: '/About'},
            '/ApiPages': {page: '/ApiPages'}
        };
    }
}