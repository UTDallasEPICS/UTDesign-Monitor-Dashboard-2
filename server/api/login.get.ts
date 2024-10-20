import { loginRedirectUrl } from "./auth0"

export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    console.log('Auth0 Domain:', config.public.AUTH0_DOMAIN)
    console.log('Auth0 Client ID:', config.public.AUTH0_CLIENT_ID)
    console.log('Auth0 Callback URL:', config.public.AUTH0_CALLBACK_URL)
    const auth0Url = `https://${config.public.AUTH0_DOMAIN}/authorize?response_type=code&client_id=${config.public.AUTH0_CLIENT_ID}&redirect_uri=${config.public.AUTH0_CALLBACK_URL}&scope=openid`
    
    return sendRedirect(event, loginRedirectUrl() || "")
  })
  