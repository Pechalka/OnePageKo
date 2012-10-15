define(["knockout", "mediator", "stateManager"], function (ko, mediator, stateManager) {
    return function (model) {
        var self = this;
        self.topMenu = ko.observableArray(model.topMenu);
        self.topMenuSelectedItem = ko.observable(model.topMenuSelectedItem);

        self.leftMenu = ko.observableArray(model.leftMenu);
        self.leftMenuSelectedItem = ko.observable(model.leftMenuSelectedItem);
        mediator.publish("catalogLayout:leftMenuSelected", model.leftMenuSelectedItem);
        self.navigateCatalog = function (item) {
            self.leftMenuSelectedItem(item.hash);
            mediator.publish("catalogLayout:leftMenuSelected", item.hash);
        };

        self.secetTopMenu = function (item) {
            mediator.publish("catalogLayout:topMenuSelected", item);
        };

        self.content = stateManager.stateHolder('catalogLayout:content');

    };
});


//var model = {
//    topMenu: ['General', 'Interventions', 'Data Import', 'Student Merge'],
//    topMenuSelectedItem: 'General',
//    leftMenu: responseData.leftMenu,
//    leftMenuSelectedItem: item
//};