//Write a JavaScript program to sort the items of an array
function sortItems(arr){
	return arr.sort(function(a,b){
		return a-b;
	});
}