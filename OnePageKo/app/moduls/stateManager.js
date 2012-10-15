define(["jquery", "state", "mediator", "knockout"], function ($, State, mediator, ko) {
    return {
        renderState: function (even, viewModelName, dataUrl, requestParams) {
            $.get(dataUrl, requestParams, function (model) {
                var mvvm = new State(viewModelName, function (state) {
                    mediator.publish(even, state);
                }, model);
            });
        },
        renderStateLocal: function (even, viewModelName, model) {
            var mvvm = new State(viewModelName, function (state) {
                mediator.publish(even, state);
            }, model);
        },
        stateHolder: function (even) {
            var observable = ko.observable(null);
            mediator.subscribe(even, function (newState) {
                observable(newState);
            });
            return observable;
        }
    };
});