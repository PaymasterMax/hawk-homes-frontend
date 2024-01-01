import type { User } from "$interface";
import jwt from "jsonwebtoken"
export async function handle({ event, resolve }) {

  const session = event.cookies.get("token")
  if (session) {
    try {
      const verify = jwt.verify(session, "G,t3l.0@rw!VE_4&F*97")

      event.locals.token = session
      event.locals.user = verify as User;
    } catch (error) {
      event.locals.token = null
      event.locals.user = undefined
      event.cookies.delete("token", { secure: false })


    }

  }


  const res = await resolve(event)

  return res
}