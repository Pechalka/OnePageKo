define(["knockout", "stateManager", "mediator"], function (ko, stateManager, mediator) {
    return function (model) {
        var self = this;

        self.items = ko.observableArray(model.items);
        self.Selected = ko.observable(model.selected);

        self.onClick = function (item) {
            mediator.publish(model.onClick, item);
        };

        mediator.subscribe(model.itemSelected, function (selectedMenuItem) {
            self.Selected("");
            var user = ko.utils.arrayFirst(self.items(), function (item) {
                return item == selectedMenuItem;
            });
            if (user)
                self.Selected(selectedMenuItem);

        });
    };
});