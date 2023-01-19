export function UpdateToken(accessToken, refreshToken) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  // localStorage.getItem("accessToken");
  //  console.log(accToken);
}
