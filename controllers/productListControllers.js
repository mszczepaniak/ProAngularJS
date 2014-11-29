/**
 * Created by Michal on 25/11/2014.
 */
angular.module("sportsStore")
    // product list active is used when category is active
    .constant("productListActiveClass", "btn-primary")
    .controller("productListCtrl", function($scope, $filter, productListActiveClass) {
    var selectedCategory = null;
    $scope.selectCategory = function(newCategory){
        selectedCategory = newCategory;
    };
    $scope.categoryFilterFn = function(product) {
        return selectedCategory == null || product.category == selectedCategory;
    };
    $scope.getCategoryClass = function (category){
        return selectedCategory == category ? productListActiveClass : "";
    };
    });

