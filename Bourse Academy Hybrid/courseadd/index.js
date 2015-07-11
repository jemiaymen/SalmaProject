'use strict';

app.courseadd = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var courseaddModel = kendo.observable({
            img: '',
            desc: '',
            title: '',
 
        
        submit: function() {
            var el = app.data.defaultProvider
            var data = el.data('Corses');
			var imgs = document.getElementById("img").files[0];

            
            
            data.create({ 'img' : courseaddModel.img ,'desc' : courseaddModel.desc ,'title' : courseaddModel.title  },
                function(data){
                    alert(JSON.stringify(data));
                },
                function(error){
                    alert(JSON.stringify(error));
                });
                
        },
        cancel: function() {
            courseaddModel.img = null;
            courseaddModel.des = '';
            courseaddModel.title = '';
        }
    });

    parent.set('courseaddModel', courseaddModel);
})(app.courseadd);