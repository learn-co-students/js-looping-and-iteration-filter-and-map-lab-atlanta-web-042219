function driversWithRevenueOver(obj_arr, dosh) {
	return obj_arr.filter(ele => ele.revenue > dosh)
}

function driverNamesWithRevenueOver(obj_arr, dosh) {
	return driversWithRevenueOver(obj_arr, dosh).map(ele => ele.name)
}

function exactMatch(obj_arr, search_term) {
	return obj_arr.filter(ele => ele[Object.keys(search_term)[0]] === Object.values(search_term)[0])
}

function exactMatchToList(obj_arr, search_term) {
	return exactMatch(obj_arr, search_term).map(ele => ele.name)
}
