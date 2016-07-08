module.exports.index = function(request, response){
    response.render('index', {title: 'APF', content: 'Análise de Pontos de Função'});
};
