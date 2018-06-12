module.exports = function(paths) {
    return {
        mode: 'none',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};