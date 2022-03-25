(function (window) {
    window.envconfig = window.envconfig || {};

    // Environment variables
    window["envconfig"]["apiurl"] = "${API_URL}";
    window["envconfig"]["authurl"] = "${AUTH_URL}";
})(this);
