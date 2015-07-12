'use strict';

app.profile = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var profileModel = kendo.observable({
        fields: {
            password: '',
            email: '',
            username: '',
        },
        submit: function() {}
    });

    parent.set('profileModel', profileModel);
})(app.profile);