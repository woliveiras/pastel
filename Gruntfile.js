#!/usr/bin/env node

// Inicializando o Grunt
module.exports = function(grunt) {
   grunt.initConfig({        
        /****** Tasks ******/

        /* Deleta a pasta dist, caso a mesma já exista */
        clean: {
              dist: {
                  src: 'dist' //Origem (Será deletado)
              }
         },

        /* Copia os arquivos da pasta de desenvolvimento (Pasta public) para a pasta
            de distribuição (Pasta dist). Envie a pasta dist para o servidor
            porém só depois do comando grunt no terminal, pois ele vai otimizar o projeto.*/
        copy: {
          public: {
                cwd: 'public',  //Origem
                src: '**',      //O que será copiado
                dest: 'dist',   //Destino
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
              cwd: 'public/js',  //Origem
              src: ['**/*.js', '!*.min.js'], //O que será minificado
              dest: 'dist/js' //Destino
            }]
          }
        },

        /* Minificar CSS */
        cssmin: {
          options:{
            keepSpecialComments: 0
          },
          production: {
            expand: true,  //Adiciona os arquivos dinamicamente
            cwd: 'public/css/', //Origem
            src: ['**/*.css', '!*.min.css'], //O que será minificado
            dest: 'dist/css/',//Destino
            //Remova esses comentários se quiser adicionar
            // a extensão .min.css no arquivo.
            // ext: '.min.css'
          }
        },

        /* Minificar imagens */
         imagemin: {
            public: {
                options: { //Opções de minificação
                    optimizationLevel: 8,
                    progressive: true
                },
                files: [{
                    expand: true,//Adiciona os arquivos dinamicamente
                    cwd: 'public/img',//Origem
                    src: '**/*.{png,jpg,gif}',//O que será minificado
                    dest: 'dist/img'//Destino
                }]
            }
        },

        /* Compilar o Less */
        less: {
            development: { //Opções de compilação
              options: {
                compress: true,
                optimization: 2
              },
              files: {
                //Arquivo que será gerado : arquivo .less
                "public/css/style.min.css": ["public/less/*.less"]
              }
            },
          },

        /* Monitorar diretório e rodar outras tasks sempre que 
        determinado evento ocorrer. Ex.: Alterar um CSS */
        watch: {
          less: {
              files: ['public/less/**/*.less'], // Arquivos que serão monitorados
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  //Registrando Tarefas
  grunt.registerTask('dist', ['clean', 'copy']); //Cria a pasta de distribuição, se ela já existir, apaga e cria de novo

  //Task Default (Será executada quando rodar Grunt no terminal)
  //Rode essa Task quando finalizar o projeto. 
  grunt.registerTask('default', ['dist', 'uglify', 'cssmin', 'imagemin', 'less',]);
};