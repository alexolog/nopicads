$.register({
  rule: {
    host: /^pic(2profit|p2)\.com$/,
  },
  ready: function () {
    'use strict';

    var i = $('form > #d1 ~ input[name=bigimg]');
    $.openImage(i.value);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;