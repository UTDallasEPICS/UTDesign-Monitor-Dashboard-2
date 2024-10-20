export default defineEventHandler(async event => {
    setCookie(event, "mdtoken", "")
    setCookie(event, "mduser", "")
    await sendRedirect(event, "/")
  })