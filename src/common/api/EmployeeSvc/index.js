// @flow
import { get, post, put, patch } from 'api/utils'

export async function employeeSearchAPI (searchData) {
	var searchString = searchData.search || ''
	var options =
    'page=' +
    (searchData.pageNumber || 1) +
    '&limit=' +
    (searchData.pageSize || 10)

	if (searchString) {
		return get('/employee?search=' + encodeURI(searchString) + '&' + options)
	} else {
		return get('/employee?' + options)
	}
}
export async function employeeGetAPI (employeeId) {
	return get('/employee/' + employeeId)
}
export async function employeeAddAPI (data) {
	return post('/employee', data)
}
export async function employeeSaveAPI (data) {
	return put('/employee/' + data._id, data)
}
export async function employeeUpdateAPI (data) {
	return patch('/employee/' + data._id, data)
}
