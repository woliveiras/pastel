module.exports = {
	/* Minificar JS */
    public: {
        options: { //Opções de minificação
            optimizationLevel: 5,
            progressive: true
        },
        files: [{
            expand: true, //Adiciona os arquivos dinamicamente
            cwd: '<%= pastel.paths.dev %>img',//Origem
            src: '**/*.{png,jpg,gif}',//O que será minificado
            dest: '<%= pastel.paths.prod %>img'//Destino
        }]
    }
};
