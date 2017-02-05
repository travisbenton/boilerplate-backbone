import Backbone from 'backbone';
import App from '../views/app.js';

const AppRouter = Backbone.Router.extend({
  routes: {
    '*actions': 'defaultRoute'
  }
});

const app_router = new AppRouter;

app_router.on('route:defaultRoute', hash => {
  new App(hash);
});
