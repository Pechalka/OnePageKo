define(["knockout", "mediator", "stateManager"], function (ko, mediator, stateManager) {
    return function (model) {
        this.items = ko.observableArray(model);

        this.navigateCatalog = function (item) {
            mediator.publish("dashBoard:menuSelected", item.hash);
        };
    };
});