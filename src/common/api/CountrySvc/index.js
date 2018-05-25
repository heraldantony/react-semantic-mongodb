// @flow
import { get, post, put, patch } from "api/utils";

export async function countrySearchAPI(searchData) {
  var searchString = searchData.search || "";
  var options =
    "page=" +
    (searchData.pageNumber || 1) +
    "&limit=" +
    (searchData.pageSize || 10);

  if (searchString) {
    return get("/country?search=" + encodeURI(searchString) + "&" + options);
  } else {
    return get("/country?" + options);
  }
}
export async function countryGetAPI(countryId) {
  return get("/country/" + countryId);
}
export async function countryAddAPI(data) {
  return post("/country", data);
}
export async function countrySaveAPI(data) {
  return put("/country/" + data._id, data);
}
export async function countryUpdateAPI(data) {
  return patch("/country/" + data._id, data);
}
