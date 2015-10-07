module.exports = function (grunt, options) {

    return {
        dist: [
            'clean',
            'copy',
        ],
        default: [
            'dist',
            'uglify',
            'imagemin',
            'less'
        ]
    };
};
