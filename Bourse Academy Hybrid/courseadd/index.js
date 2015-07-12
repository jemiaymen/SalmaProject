'use strict';

app.courseadd = kendo.observable({
     onShow: function() {
         /*
        var au = app.data.defaultProvider.authentication.getAuthenticationStatus();
        if(au._result != null){
            if(au._result.status != "authenticated" ){
             alert("you must Login !");
             window.location.href = 'index.html';
         } 
        }
         */
    }
});
(function(parent) {
    var courseaddModel = kendo.observable({
            img: '',
            desc: '',
            title: '',
        validateData: function(data) {
                if (!data.img || !data.desc || !data.title) {
                    alert('Error All Fields are Required');
                    return false;
                }

                return true;
            },
        submit: function() {
            if(!courseaddModel.validateData(courseaddModel)) {
                return ;
            }
            var el = app.data.defaultProvider
            var data = el.data('Corses');
			var imgs = document.getElementById("img").files[0];
			var reader = new FileReader();
            var file = {
                    "Filename":imgs.name,
                    "ContentType":imgs.type,
                    "base64": ""
                    };
            reader.readAsDataURL(imgs);
			reader.onload = function() {
                file.base64 = reader.result.split(',')[1];
                el.Files.create(file,
                function (dt) {
                    console.log( dt);
                    data.create({ 'img' : dt.Id ,'desc' : courseaddModel.desc ,'title' : courseaddModel.title  },
                    function(d){
                        console.log( d);
                        courseaddModel.rst();
                    },
                    function(err){
                       console.log( err);
                    });
                },
                function (rr) {
                    console.log( rr);
                });

            };
            
            
   			
            
            
                
        },
        cancel: function() {
            courseaddModel.rst();
        },
        rst : function(){
          var frm = document.getElementById('frm');
          frm.reset();  
        }
    });

    parent.set('courseaddModel', courseaddModel);
})(app.courseadd);