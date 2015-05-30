var path = require('path');
var glob = require('glob');

var routes = "routes"
var extension = ".js";

var routesDir = path.join(__dirname, '../' + routes + '/**/*' + extension);

function allRoutes() {
    return glob.sync(routesDir).map(routing);
}

function routing(file) {
    var apiPath = apiPathForFile(file);
    var router = require(file);
    return {'path': apiPath, 'router': router};
}

function apiPathForFile(file) {
    var routeJS = file.substring(file.lastIndexOf(routes) + routes.length);
    var route = routeJS.slice(0, -extension.length);
    if (route === '/index') {
        return '/';
    }
    return route;
}

module.exports = allRoutes;
