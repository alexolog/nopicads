$.register({
  rule: 'http://www.lienscash.com/l/*',
  ready: function () {
    'use strict';

    $.removeNodes('iframe');

    var a = $('#time a');
    $.openLink(a.id);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
