define(["knockout", "stateManager", "mediator"], function (ko, stateManager, mediator) {
    return function (model) {
        var self = this;

        self.schoolName = ko.observable(model.schoolName);
        mediator.subscribe("schoolTitle:schoolNameChange", function (newSchoolName) {
            self.schoolName(newSchoolName);
        });

        self.schoolYear = ko.observable(model.schoolYear);
        mediator.subscribe("schoolTitle:schoolYearChange", function (newSchoolYear) {
            self.schoolYear(newSchoolYear);
        });
    };
});