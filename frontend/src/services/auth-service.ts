import { AxiosRequestConfig } from 'axios';
import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { requestBackend } from '../utils/request';
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

export function loginRequest(loginData: CredentialsDTO) {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
  }

  const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" })

  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/oauth/token",
    data: requestBody,
    headers
  }
  console.log(requestBody);

  return requestBackend(config);
}