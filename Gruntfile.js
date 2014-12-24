#!/usr/bin/env node

// Inicializando o Grunt
module.exports = function(grunt) {
   grunt.initConfig({
   		/****** Diretórios ******/

        paths:{
          prod : 'dist/', // Pasta de distribuição. Será enviada para o servidor.
          dev : 'src/' //Pasta onde deve ser desenvolvido o projeto.
        },

        /****** Tasks ******/

        /* Deleta a pasta dist, caso a mesma já exista */
        clean: {
              dist: {
                  src: '<%= paths.prod %>' //pasta que será deletada
              }
         },

        /* Copia os arquivos de src para dist */
        copy: {
          public: {
                cwd: '<%= paths.dev %>', //Origem
                src: '**',      //O que será copiado
                dest: '<%= paths.prod %>', //Destino
                expand: true
          }
        },

        /* Minificar JS */
        uglify: {
          options: {
              mangle: {
                except: ['*.min.js']
              }
            },
          my_target: {
            files: [{
              expand: true,   //Adiciona os arquivos dinamicamente
              cwd: '<%= paths.dev %>js',  //Origem
              src: ['**/*.js', '!*.min.js'], //O que será minificado
              dest: '<%= paths.prod %>js' //Destino
            }]
          }
        },

        /* Minificar imagens */
         imagemin: {
            public: {
                options: { //Opções de minificação
                    optimizationLevel: 7,
                    progressive: true
                },
                files: [{
                    expand: true, //Adiciona os arquivos dinamicamente
                    cwd: '<%= paths.dev %>img',//Origem
                    src: '**/*.{png,jpg,gif}',//O que será minificado
                    dest: '<%= paths.prod %>img'//Destino
                }]
            }
        },

        /* Compilar o Less */
        less: {
            development: { //Opções de compilação
              options: {
                compress: true, //Minificar o arquivo
                optimization: 2 //Nível de otimização do arquivo gerado
              },
              files: {
                //Siga o padrão:
                //caminho/arquivo-gerado.min.css : caminho/arquivo.less
                '<%= paths.dev %>css/style.min.css': ['<%= paths.dev %>less/default.less']
              }
            },
          },

        /* Monitorar diretório e rodar outras tasks sempre que
        determinado evento ocorrer. Ex.: Alterar um CSS */
        watch: {
          less: {
              files: ['<%= paths.dev %>less/**/*.less'], // Arquivos que serão monitorados
                tasks: ['less'], //Task que será executada
                options: {
                  nospawn: true
                }
              },
          }
});

  //Carregando plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  //Registrando Tarefas
  grunt.registerTask('dist', ['clean', 'copy']); //Cria a pasta de distribuição, se ela já existir, apaga e cria de novo

  //Task Default (Será executada quando rodar Grunt no terminal)
  //Rode essa Task quando finalizar o projeto.
  grunt.registerTask('default', ['dist', 'uglify', 'imagemin', 'less',]);
};