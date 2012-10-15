define(["mediator", "stateManager"], function (mediator, stateManager) {

    function _showCatalogLayout(leftmenuDataUrl, leftMenuSelectedItem, topMenuSelectedItem) {
        $.get(leftmenuDataUrl, '', function (responseData) {
            var model = {
                topMenu: ['General', 'Interventions', 'Data Import', 'Student Merge'],
                topMenuSelectedItem: topMenuSelectedItem,
                leftMenu: responseData,
                leftMenuSelectedItem: leftMenuSelectedItem
            };

            stateManager.renderStateLocal('app:content', "catalog/catalogLayout", model);
        });
    }


    mediator.subscribe('app:start', function () {
        //todo: request to server

        stateManager.renderState('app:content', 'catalog/general/dashBoard', '/home/catalogData');
        stateManager.renderStateLocal('app:studentSearch', "studentSearch");

        stateManager.renderStateLocal('app:schoolTitle', "schoolTitle", {
            schoolName: 'Shah School',
            schoolYear: '2012 - 2013'
        });

        //todo: remove duplicate
        stateManager.renderStateLocal('app:userMenu', "userMenu", {
            items: ["Staff", "catalog", "References", "Logout"],
            selected: 'catalog',
            onClick: 'app:menuSelected',
            itemSelected: 'app:menuSelect'
        });

        stateManager.renderStateLocal('app:topMenu', "topMenu", {
            items: ["tasks", "students"],
            selected: '',
            onClick: 'app:menuSelected',
            itemSelected: 'app:menuSelect'
        });
    });

    mediator.subscribe('studentSearch:search', function (textForSearch) {
        mediator.publish("app:menuSelect", 'students');
        stateManager.renderState('app:content', 'students/allStudentLayout', '/home/studentData', { q: textForSearch });
    });

    mediator.subscribe("app:menuSelected", function (item) {

        var config = {
            "catalog": { viewModel: "catalog/general/dashBoard", model: '/home/catalogData' },
            "tasks": { viewModel: "tasks/taskLayout", model: '/home/taskData' },
            "students": { viewModel: "students/allStudentLayout", model: '/home/studentData' }
        };

        if (config[item]) {
            mediator.publish("studentSearch:clean");
            mediator.publish("app:menuSelect", item);
            stateManager.renderState('app:content', config[item].viewModel, config[item].model);
            return;
        }

        alert('not implemented yet.');
    });


    mediator.subscribe("dashBoard:menuSelected", function (secectedItem) {
        _showCatalogLayout('/home/catalogData', secectedItem, 'General');
    });


    mediator.subscribe("catalogLayout:topMenuSelected", function (secectedItem) {
        if (secectedItem == 'General')
            stateManager.renderState('app:content', "catalog/general/dashBoard", "/home/catalogData");

        if (secectedItem == 'Interventions')
            _showCatalogLayout('/home/catalogInterventionsData', '#offensecodes', 'Interventions');
    });

    mediator.subscribe("catalogLayout:leftMenuSelected", function (secectedItem) {
        var config = {
            "#schoolyears": { viewModel: "catalog/general/schoolYears", model: '/home/SchoolYearsData' },
            "#letterstemplate": { viewModel: "catalog/general/lettersTemplate", model: '/home/LettersTemplateData' },

            "#offensecodes": { viewModel: "catalog/interventions/offensecodes", model: '/home/OffenseCodesData' },
            "#elementaryprizes": { viewModel: "catalog/interventions/elementaryprizes", model: '/home/elementaryprizesData' }
        };

        stateManager.renderState('catalogLayout:content', config[secectedItem].viewModel, config[secectedItem].model);
    });
});