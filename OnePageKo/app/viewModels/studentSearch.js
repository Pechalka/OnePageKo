define(["knockout", "stateManager", "mediator"], function (ko, stateManager, mediator) {
    return function () {
        var self = this;
        
        self.studentSearchText = ko.observable("");
        self.studentSearch = function () {
            mediator.publish("studentSearch:search", self.studentSearchText());
        };

        mediator.subscribe("studentSearch:clean", function () {
            self.studentSearchText("");
        });
    };
});
