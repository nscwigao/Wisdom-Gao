angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.issuedetail', {
        views: {
            app: {
                controller: 'app_issuedetail',
                templateProvider: function (app) {
                    return app.templateProvider('app.issuedetail');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.loginconfident', {
        views: {
            app: {
                controller: 'app_loginconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginconfident');
                }
            }
        }
    }).state('app.listviewcool', {
        views: {
            app: {
                controller: 'app_listviewcool',
                templateProvider: function (app) {
                    return app.templateProvider('app.listviewcool');
                }
            }
        }
    }).state('app.datatest', {
        views: {
            app: {
                controller: 'app_datatest',
                templateProvider: function (app) {
                    return app.templateProvider('app.datatest');
                }
            }
        }
    }).state('app.reportissue', {
        views: {
            app: {
                controller: 'app_reportissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportissue');
                }
            }
        }
    });
});