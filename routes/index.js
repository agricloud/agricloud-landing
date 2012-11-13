
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '雲端農業' });

  //res.redirect("index.html");
};


exports.buy = function(req, res){
  res.render('buy', { title: '購買產品' });

  //res.redirect("index.html");
};