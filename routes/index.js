
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });

  //res.redirect("index.html");
};

exports.buy = function(req, res){
  res.render('buy', { title: 'Express' });

  //res.redirect("index.html");
};