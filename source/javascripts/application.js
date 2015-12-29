//= require jquery
//= require bootstrap-sprockets
//= require angular
//= require angular-form-builder/index
//= require angular-validator/angular-validator
//= require angular-validator/angular-validator-rules

'use strict';

var afb = angular.module('afb', ['builder', 'builder.components', 'validator.rules']);

afb.run([
    '$builder', function($builder) {

    }
]);

afb.controller('newController', [
    '$scope', '$builder', '$validator', function($scope, $builder, $validator) {

        $scope.form = $builder.forms['default'];

        return $scope.submit = function() {
            return $validator.validate($scope, 'default').success(function() {
                return console.log('success');
            }).error(function() {
                return console.log('error');
            });
        };
    }
]);
