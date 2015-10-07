// Inicializando o Grunt

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    // require('time-grunt')(grunt);

    var pastel = {
        paths: {
          prod : 'dist/', // Pasta de distribuição. Será enviada para o servidor.
          dev : 'src/' //Pasta onde deve ser desenvolvido o projeto.
        }
    };

    var path = require('path');
    var configs = require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt-tasks'),
        init: true,
        data: {
          pastel: pastel
        },
    });

  grunt.initConfig(configs);
};