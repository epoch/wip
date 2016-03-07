module.exports = {
  
  createRouter: function() {

    var routes = []; // array of route objects

    var _check = function(fragment) {
      // var fragment = '';
      // var match = window.location.href.match(/#(.*)$/);
      // fragment = match ? match[1] : '';
      console.log('frag', fragment);

      for(var index = 0; index < routes.length; index++) {
        console.log('route path', routes[index].path)
        if (fragment === routes[index].path) {
          return routes[index].handler();
        }
      }

      // routes.forEach(function(route) {
      //   if (fragment === route.path) {
      //     console.log(route.handler)
      //     return route.handler();
      //   }
      // })
    }

    return {
      add: function(path, handler) {
        routes.push({ path: path, handler: handler });
        console.log(routes);
      },

      render: function(path) {
        return _check(path);
      }
    }
  }
}
