module.exports = function disable_sidebar(params){

  console.log('fix this')
  // $(params.root+' .slider').slider('disable');

  d3.selectAll(params.root+' .btn').attr('disabled',true);

  d3.select( params.viz.viz_svg ).style('opacity',0.70);

};
