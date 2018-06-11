// @flow
/**
 * Combine all sagas
 */

import { login as loginSaga, logout as logoutSaga } from './auth'
import { signup as signupSaga } from './signup'

import { addRegion as addRegionSaga } from './region/add'
import { saveRegion as saveRegionSaga } from './region/save'
import { updateRegion as updateRegionSaga } from './region/update'
import { getRegion as getRegionSaga } from './region/get'
import { deleteRegion as deleteRegionSaga } from './region/delete'
import { searchRegion as searchRegionSaga } from './region/search'
import { addCountry as addCountrySaga } from './country/add'
import { saveCountry as saveCountrySaga } from './country/save'
import { updateCountry as updateCountrySaga } from './country/update'
import { getCountry as getCountrySaga } from './country/get'
import { deleteCountry as deleteCountrySaga } from './country/delete'
import { searchCountry as searchCountrySaga } from './country/search'
import { addLocation as addLocationSaga } from './location/add'
import { saveLocation as saveLocationSaga } from './location/save'
import { updateLocation as updateLocationSaga } from './location/update'
import { getLocation as getLocationSaga } from './location/get'
import { deleteLocation as deleteLocationSaga } from './location/delete'
import { searchLocation as searchLocationSaga } from './location/search'
import { addDepartment as addDepartmentSaga } from './department/add'
import { saveDepartment as saveDepartmentSaga } from './department/save'
import { updateDepartment as updateDepartmentSaga } from './department/update'
import { getDepartment as getDepartmentSaga } from './department/get'
import { deleteDepartment as deleteDepartmentSaga } from './department/delete'
import { searchDepartment as searchDepartmentSaga } from './department/search'
import { addEmployee as addEmployeeSaga } from './employee/add'
import { saveEmployee as saveEmployeeSaga } from './employee/save'
import { updateEmployee as updateEmployeeSaga } from './employee/update'
import { getEmployee as getEmployeeSaga } from './employee/get'
import { deleteEmployee as deleteEmployeeSaga } from './employee/delete'
import { searchEmployee as searchEmployeeSaga } from './employee/search'
import { addJob as addJobSaga } from './job/add'
import { saveJob as saveJobSaga } from './job/save'
import { updateJob as updateJobSaga } from './job/update'
import { getJob as getJobSaga } from './job/get'
import { deleteJob as deleteJobSaga } from './job/delete'
import { searchJob as searchJobSaga } from './job/search'
import { addTask as addTaskSaga } from './task/add'
import { saveTask as saveTaskSaga } from './task/save'
import { updateTask as updateTaskSaga } from './task/update'
import { getTask as getTaskSaga } from './task/get'
import { deleteTask as deleteTaskSaga } from './task/delete'
import { searchTask as searchTaskSaga } from './task/search'

/**
 * Returns  the list of sagas
 */
export default function getSagaList () {
	return [
		{ name: 'login', saga: loginSaga },
		{ name: 'logout', saga: logoutSaga },
		{ name: 'signup', saga: signupSaga },
		{ name: 'addRegion', saga: addRegionSaga },
		{ name: 'saveRegion', saga: saveRegionSaga },
		{ name: 'updateRegion', saga: updateRegionSaga },
		{ name: 'getRegion', saga: getRegionSaga },
		{ name: 'deleteRegion', saga: deleteRegionSaga },
		{ name: 'searchRegion', saga: searchRegionSaga },
		{ name: 'addCountry', saga: addCountrySaga },
		{ name: 'saveCountry', saga: saveCountrySaga },
		{ name: 'updateCountry', saga: updateCountrySaga },
		{ name: 'getCountry', saga: getCountrySaga },
		{ name: 'deleteCountry', saga: deleteCountrySaga },
		{ name: 'searchCountry', saga: searchCountrySaga },
		{ name: 'addLocation', saga: addLocationSaga },
		{ name: 'saveLocation', saga: saveLocationSaga },
		{ name: 'updateLocation', saga: updateLocationSaga },
		{ name: 'getLocation', saga: getLocationSaga },
		{ name: 'deleteLocation', saga: deleteLocationSaga },
		{ name: 'searchLocation', saga: searchLocationSaga },
		{ name: 'addDepartment', saga: addDepartmentSaga },
		{ name: 'saveDepartment', saga: saveDepartmentSaga },
		{ name: 'updateDepartment', saga: updateDepartmentSaga },
		{ name: 'getDepartment', saga: getDepartmentSaga },
		{ name: 'deleteDepartment', saga: deleteDepartmentSaga },
		{ name: 'searchDepartment', saga: searchDepartmentSaga },
		{ name: 'addEmployee', saga: addEmployeeSaga },
		{ name: 'saveEmployee', saga: saveEmployeeSaga },
		{ name: 'updateEmployee', saga: updateEmployeeSaga },
		{ name: 'getEmployee', saga: getEmployeeSaga },
		{ name: 'deleteEmployee', saga: deleteEmployeeSaga },
		{ name: 'searchEmployee', saga: searchEmployeeSaga },
		{ name: 'addJob', saga: addJobSaga },
		{ name: 'saveJob', saga: saveJobSaga },
		{ name: 'updateJob', saga: updateJobSaga },
		{ name: 'getJob', saga: getJobSaga },
		{ name: 'deleteJob', saga: deleteJobSaga },
		{ name: 'searchJob', saga: searchJobSaga },
		{ name: 'addTask', saga: addTaskSaga },
		{ name: 'saveTask', saga: saveTaskSaga },
		{ name: 'updateTask', saga: updateTaskSaga },
		{ name: 'getTask', saga: getTaskSaga },
		{ name: 'deleteTask', saga: deleteTaskSaga },
		{ name: 'searchTask', saga: searchTaskSaga }
	]
}
