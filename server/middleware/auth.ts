import { loginRedirectUrl, logoutRedirectUrl } from "../api/auth0"
import jwt from "jsonwebtoken"
import fs from "fs"
import { PrismaClient } from "@prisma/client"
const client = new PrismaClient()

const runtime = useRuntimeConfig()
// TODO: FINISH THIS

export default defineEventHandler(async event => {
    event.context.client = client
    const mdtoken = getCookie(event, "mdtoken") || ""
    if (!mdtoken && !(event.node.req.url?.includes('/api/callback') || event.node.req.url?.includes("/"))) {
        await sendRedirect(event, loginRedirectUrl());
      } else {
        // theoretically logged in
        if (mdtoken) {
          try {
            const claims = jwt.verify(
              mdtoken, 
              fs.readFileSync(process.cwd()+"/cert-dev.pem")
            )
            event.context.claims = claims
            event.context.user = await event.context.client.user.findFirst(
              {
                where: { email: claims.email }
              ,
              include: {
                Pages: {
                  select: {
                    cuid: true
                  }
                }, Family: {
                  select: {
                    cuid: true,
                    stripe_account_id: true,
                    Pages: { select: {
                      cuid: true,
                      status: true
                    }
                  }
                }
                }
              }
              })
              if(!event.context.user) {
                setCookie(event,'mdtoken','')
                setCookie(event,'mduser','')
                return await sendRedirect(event, logoutRedirectUrl(mdtoken)) // todo: add error message after failed log in attempt
                return await sendRedirect(event, loginRedirectUrl());
              }
              setCookie(event, "mduser", JSON.stringify(event.context.user))
              return await sendRedirect(event, '/')
            }
            catch (e) {
                console.error(e)
            }
        }
    }
    
})
