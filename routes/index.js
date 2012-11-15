
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '雲端農業',ctrl:'market' });

  //res.redirect("index.html");
};


exports.buy = function(req, res){
  res.render('buy', { title: '購買產品',ctrl:'' });

  //res.redirect("index.html");
};

exports.buyonline = function(req, res){
  res.render('buyonline', { title: '線上訂購',ctrl:'' });

};