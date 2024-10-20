import { logoutRedirectUrl } from "./auth0"

export default defineEventHandler(async event => {
  const id_token = getCookie(event, "mdtoken")
  await sendRedirect(event, logoutRedirectUrl(id_token as string) || "")
})