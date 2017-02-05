import 'jquery';
import 'underscore';
import Backbone from 'backbone';
import './routes/routes';
require('../styles/main.scss');

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
