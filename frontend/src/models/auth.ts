export type RoleEnum = "ROLE_ADMIN" | "ROLE CLIENT";

export type CredentialsDTO = {
  username: string;
  password: string;
}

export type AccessTokenPayloadDTO = {
  exp: number,
  user_name: string,
  "authorities": RoleEnum[];
}