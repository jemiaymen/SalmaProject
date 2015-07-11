'use strict';

app.courseadd = kendo.observable({
     onShow: function() {
        var au = app.data.defaultProvider.authentication.getAuthenticationStatus();
        if(au._result != null){
            if(au._result.status != "authenticated" ){
             alert("you must Login !");
             window.location.href = 'index.html';
         } 
        }
         
    }
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
                    alert("Courses Add With Success");
                	courseaddModel.rst();
                },
                function(error){
                    alert(JSON.stringify(error));
                });
                
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