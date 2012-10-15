define(["knockout", "stateManager", "mediator"], function (ko, stateManager) {
    return function () {
        var self = this;

        self.topMenu = stateManager.stateHolder('app:topMenu');
        self.userMenu = stateManager.stateHolder('app:userMenu');

        self.schoolTitle = stateManager.stateHolder('app:schoolTitle');

        self.studentSeach = stateManager.stateHolder('app:studentSearch');

        self.content = stateManager.stateHolder('app:content');
    };
});
