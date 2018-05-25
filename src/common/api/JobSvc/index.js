// @flow
import { get, post, put, patch } from "api/utils";

export async function jobSearchAPI(searchData) {
  var searchString = searchData.search || "";
  var options =
    "page=" +
    (searchData.pageNumber || 1) +
    "&limit=" +
    (searchData.pageSize || 10);

  if (searchString) {
    return get("/job?search=" + encodeURI(searchString) + "&" + options);
  } else {
    return get("/job?" + options);
  }
}
export async function jobGetAPI(jobId) {
  return get("/job/" + jobId);
}
export async function jobAddAPI(data) {
  return post("/job", data);
}
export async function jobSaveAPI(data) {
  return put("/job/" + data._id, data);
}
export async function jobUpdateAPI(data) {
  return patch("/job/" + data._id, data);
}
