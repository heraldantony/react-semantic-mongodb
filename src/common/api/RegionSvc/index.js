// @flow
import { get, post, put, patch } from 'api/utils'

export async function regionSearchAPI (searchData) {
	var searchString = searchData.search || ''
	var options =
    'page=' +
    (searchData.pageNumber || 1) +
    '&limit=' +
    (searchData.pageSize || 10)

	if (searchString) {
		return get('/region?search=' + encodeURI(searchString) + '&' + options)
	} else {
		return get('/region?' + options)
	}
}
export async function regionGetAPI (regionId) {
	return get('/region/' + regionId)
}
export async function regionAddAPI (data) {
	return post('/region', data)
}
export async function regionSaveAPI (data) {
	return put('/region/' + data._id, data)
}
export async function regionUpdateAPI (data) {
	return patch('/region/' + data._id, data)
}
