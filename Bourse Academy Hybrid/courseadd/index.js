'use strict';

app.courseadd = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var courseaddModel = kendo.observable({
            img: '',
            desc: '',
            title: '',
            fb: '', 
            ct :'',  
        
        submit: function() {
            var el = app.data.defaultProvider
            var data = el.data('Corses');
			var imgs = document.getElementById("img").files[0];
            var file = {
                "Filename":file.name,
                "ContentType": file.type,
            };
            alert(file.type);
            
            el.Files.create(file,
            function (data) {
                alert(JSON.stringify(data));
            },
            function (error) {
                alert(JSON.stringify(error));
            });
            
            /*
            data.create({ 'img' : courseaddModel.img ,'desc' : courseaddModel.desc ,'title' : courseaddModel.title  },
                function(data){
                    alert(JSON.stringify(data));
                },
                function(error){
                    alert(JSON.stringify(error));
                });
                */
        },
        cancel: function() {
            courseaddModel.img = null;
            courseaddModel.des = '';
            courseaddModel.title = '';
        }
    });

    parent.set('courseaddModel', courseaddModel);
})(app.courseadd);