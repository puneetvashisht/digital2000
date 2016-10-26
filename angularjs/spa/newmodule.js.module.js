/**
 * @param {type} angular
 * @returns {angular.module}
 * @author 
 * @since 10/26/2016
 */

(function () {
    'use strict';

    angular
        .module('app.NewmoduleJsModule', [])
        .config(config)
        .run(runBlock);

        /* @ngInject */
        function config() {
            // Your code here
        }

        /* @ngInject */
        function runBlock() {
            // Your code here
        }
})();
