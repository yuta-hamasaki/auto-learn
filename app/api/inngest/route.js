import { serve } from "inngest/next"
import { inngest } from '../../../inngest/client'
import { CreateNewUser, helloWorld } from './functions'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    helloWorld,
    CreateNewUser
  ],
})