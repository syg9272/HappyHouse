import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(userDto, success, fail) {
  await api.post(`/member/login`, JSON.stringify(userDto)).then(success).catch(fail);
}

async function findById(id, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/member/info/${id}`).then(success).catch(fail);
}

async function tokenRegeneration(userDto, success, fail) {
  api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api.post(`/member/refresh`, userDto).then(success).catch(fail);
}

async function logout(id, success, fail) {
  await api.get(`/member/logout/${id}`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };
