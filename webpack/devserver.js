module.exports = function() {
    return {
        devServer: {
            stats: 'errors-only',
            historyApiFallback: true,
            contentBase: './',
            inline: true
        }
    };
};