// @flow
import { get, post, put, patch, deleteRequest } from 'api/utils'

export async function taskSearchAPI (searchData) {
	var searchString = searchData.search || ''
	var options =
    'page=' +
    (searchData.pageNumber || 1) +
    '&limit=' +
    (searchData.pageSize || 10)

	if (searchString) {
		return get('/task?search=' + encodeURI(searchString) + '&' + options)
	} else {
		return get('/task?' + options)
	}
}
export async function taskGetAPI (taskId) {
	return get('/task/' + taskId)
}
export async function taskAddAPI (data) {
	return post('/task', data)
}
export async function taskSaveAPI (data) {
	return put('/task/' + data._id, data)
}
export async function taskUpdateAPI (data) {
	return patch('/task/' + data._id, data)
}
export async function taskDeleteAPI (taskId) {
	return deleteRequest('/task/' + taskId)
}
