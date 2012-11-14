(function() {

  this.market = function($scope) {
    $scope.itemList = [
      {
        imgsrc: "http://placehold.it/140x140",
        title: "雞蛋",
        descript: "皮薄清甜",
        buttonName: "購買去>>"
      }, {
        imgsrc: "http://placehold.it/140x140",
        title: "吉利",
        descript: "溫潤爽口",
        buttonName: "購買去>>"
      }, {
        imgsrc: "http://placehold.it/140x140",
        title: "發財",
        descript: "大粒福氣",
        buttonName: "購買去>>"
      }, {
        imgsrc: "http://placehold.it/140x140",
        title: "精品",
        descript: "最佳禮品",
        buttonName: "購買去>>"
      }
    ];
    return $scope.slideList = [
      {
        imgsrc: "http://sphotos-a.ak.fbcdn.net/hphotos-ak-ash3/c0.88.843.403/p843x403/539596_320406811382023_115737560_n.jpg",
        title: "開心農場，買得安心，吃的健康",
        descript: "讓消費者以平價購買安全健康的農產品，果農得到合理收入是我們的使命，邀請您參與台灣農業e化的轉型！"
      }
    ];
  };

}).call(this);
