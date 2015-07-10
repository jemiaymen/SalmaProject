'use strict';

app.courseadd = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var courseaddModel = kendo.observable({
        fields: {
            img: '',
            des: '',
            title: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('courseaddModel', courseaddModel);
})(app.courseadd);