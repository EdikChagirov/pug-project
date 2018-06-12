// Nodule for includes other CSS module. Not yet used.

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    };
};