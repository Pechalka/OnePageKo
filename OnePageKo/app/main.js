require.config({
    paths: {
        "jquery": "/Scripts/jquery-1.8.2.min",
        "knockout": "/Scripts/knockout-2.1.0",
        "text": "/Scripts/text",
        "stringTemplateEngine": "/app/moduls/stringTemplateEngine",
        "mediator": "/app/moduls/mediator",
        "stateManager": "/app/moduls/stateManager",
        "state": "/app/moduls/state"
    },
    shim: {
        "stringTemplateEngine": ["knockout"]
    }
});


require(["knockout", "state", "mediator",
        "stringTemplateEngine",
        "dispatcher"
    ], function(ko, State, mediator) {
        var sm = new State('app', function(app) {
            ko.applyBindings(app);
            mediator.publish('app:start');
        });

    });