define(["knockout", "text"], function (ko) {
    return function (file, callback, model) {
        var s = this;
        s.data = ko.observable(null);
        s.html = ko.observable(null);
        s.setVar = function (field, value) {
            var data = s.data();
            data[field] = value;
            s.data(data);
        };

        require([
            "/app/viewModels/" + file + ".js",
            "text!/app/views/" + file + ".html"  
            ], function (ViewModel, view) {
            s.data(typeof ViewModel == "function" ? new ViewModel(model) : ViewModel);
            s.html(view);

            if (callback && typeof callback === "function")
                callback(s);
        });
    };
});
