import http from "./http";
export const listObj = {
  getalldata: () => http.get("/allData"),
};
