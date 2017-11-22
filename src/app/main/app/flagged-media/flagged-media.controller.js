(function(){
    'use strict'
    angular

    .module('app.flagged-media')
    .controller('FlaggedMediaController', FlaggedMediaController);

    FlaggedMediaController.$inject=[];
    
    function FlaggedMediaController(){
        this.$onInit = onInit;
        
        function onInit(){
        //
        }
    }
    
    

})(angular);