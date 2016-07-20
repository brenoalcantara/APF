module.exports.index = function(request, response){
    response.render('index', {title: 'APF - Login'});
};

module.exports.dashboard = function(request, response){
    response.render('dashboard', {title: 'APF - Dashboard'});
};
