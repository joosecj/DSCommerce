import { requestBackend } from "../utils/request";

import * as authService from './auth-service';

const headers = {
  Authorization: "Bearer " + authService.getAcessToken()
}

console.log(headers)

export function findMe() {
  return requestBackend({ url: `/users/me`, headers })
}
