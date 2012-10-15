define([], function (obj) {

    var channnels = {};
    if (!obj) obj = {};

    obj.subscribe = function (channnel, subscription) {
        if (!channnels[channnel]) channnels[channnel] = [];
        channnels[channnel].push(subscription);
    };

    obj.publish = function (channel) {
        if (!channnels[channel]) return;
        var arg = [].slice.call(arguments, 1);
        for (var i = 0, l = channnels[channel].length; i < l; i++) {
            channnels[channel][i].apply(this, arg);
        }
    };

    return obj;
});

