'use strict';

app.corses = kendo.observable({
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
    var dataProvider = app.data.defaultProvider,
        processImage = function(img) {
            if (!img) {
                var empty1x1png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=';
                img = 'data:image/png;base64,' + empty1x1png;
            } else if (img.slice(0, 4) !== 'http' &&
                img.slice(0, 2) !== '//' &&
                img.slice(0, 5) !== 'data:') {
                var setup = dataProvider.setup;
                img = setup.scheme + ':' + setup.url + setup.apiKey + '/Files/' + img + '/Download';
            }

            return img;
        },

        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'Corses',
                dataProvider: dataProvider
            },
            change: function(e) {
                var data = this.data();
                for (var i = 0; i < data.length; i++) {
                    data[i]['imgUrl'] = processImage(data[i]['img']);
                }
            },
            schema: {
                model: {
                    fields: {
                        'title': {
                            field: 'title',
                            defaultValue: ''
                        },
                        'desc': {
                            field: 'desc',
                            defaultValue: ''
                        },
                        'img': {
                            field: 'img',
                            defaultValue: ''
                        },
                    }
                }
            },
            serverSorting: true,
            serverPaging: true,
            pageSize: 50
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        corsesModel = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#corses/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    itemModel = dataSource.getByUid(item);
                itemModel.imgUrl = processImage(itemModel.img);
                corsesModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('corsesModel', corsesModel);
})(app.corses);