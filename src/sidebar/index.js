var ini_sidebar = require('./ini_sidebar');
var set_up_filters = require('../filters/set_up_filters');
var set_up_colorbar = require('./set_up_colorbar');
var set_up_search = require('./set_up_search');
var set_up_reorder = require('./set_up_reorder');
var make_cat_keys = require('./make_cat_keys');
var set_sidebar_ini_view = require('./set_sidebar_ini_view');

/* Represents sidebar with controls.
 */
module.exports = function sidebar(config, params) {

  var sidebar = d3.select(params.root+' .sidebar_wrapper');

  sidebar
    .append('div')
    .classed('title_section',true);

  sidebar
    .append('div')
    .classed('about_section',true)

  set_up_reorder(params, sidebar);

  set_up_search(sidebar, params);

  if (params.viz.show_dendrogram){
    set_up_colorbar(sidebar, params);
  }

  var possible_filter_names = _.keys(params.viz.possible_filters);

  _.each(possible_filter_names, function(inst_filter){
    set_up_filters(config, params, inst_filter);
  });
  
  ini_sidebar(params);

  make_cat_keys(params);

  // when initializing the visualization using a view
  if (params.ini_view !== null) {

    set_sidebar_ini_view(params);

    params.ini_view = null;

  }

  return params;

};
