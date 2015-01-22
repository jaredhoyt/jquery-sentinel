/*
 * sentinel
 * https://github.com/jaredhoyt/jquery-sentinel
 *
 * Copyright (c) 2015 Jared Hoyt
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.sentinel = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.sentinel = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.sentinel.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.sentinel.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].sentinel = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
