
import HomePage from '../pages/home.f7.html';

var routes = [
  {
    path: '(.*)',

    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;
      
      // App instance
      var app = router.app;
      var campanaId = routeTo.params.campanaId;
      resolve(
        {component: HomePage},
        {context: {
          lotes: 'test'
        }}
      );
      // Show Preloader
      // app.preloader.show();
      // app.request.promise.json('https://192.168.5.124/puntabosque/items/lotes')
      // .then(function (res) {
      //   console.log(res);
      //   app.preloader.hide();
      //   resolve(
      //     {
      //       component: HomePage,
      //     },
      //     {
      //       context: {
      //         //server: app.data.server,
      //         //campana: res.data.data,
      //         lotes: res.data,
      //       }
      //     }
      //   );
      // });
    }

  },
];

export default routes;