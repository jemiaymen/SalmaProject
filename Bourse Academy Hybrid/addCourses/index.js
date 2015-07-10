'use strict';

app.addCourses = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var addCoursesModel = kendo.observable({
        fields: {
            img: '',
            desc: '',
            title: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('addCoursesModel', addCoursesModel);
})(app.addCourses);