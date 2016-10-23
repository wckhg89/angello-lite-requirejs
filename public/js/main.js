require.config ({
    baseUrl : 'js',
    paths : {
  		'jquery': '../../node_modules/jquery/dist/jquery',
  		'angular': '../../node_modules/angular/angular',
    },
    shim:{
		'angular':{
			deps:['jquery'],
			exports:'angular'
		}
	}
});

require(['angular', 'app',
          'controller/MainCtrl',
          'directive/story'],
          function (angular, MyModule,
                    MainCtrl,
                    story
                    ) {
  //페이지가 완전히 로드된 뒤에 실행
  $(document).ready(function () {
    //위의 디펜던시 중 myApp이 포함된 app.js가 로드된 이후에 아래가 수행된다.
    //임의로 앵귤러 부트스트래핑을 수행한다.
    angular.bootstrap(document, ['Angello']);

  });
});
