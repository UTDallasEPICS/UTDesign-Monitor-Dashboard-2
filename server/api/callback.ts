import jwt from "jsonwebtoken"
import fs from "fs"

const runtime = useRuntimeConfig()
export default defineEventHandler(async event => {
  const body = await readBody(event)
  setCookie(event, "mdtoken", body.id_token) // cvtoken renamed to mdtoken because cv means Carson's Village
  await sendRedirect(event, "/") 
});