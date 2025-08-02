import { inngest} from "../../../inngest/client"

export const helloWorld = inngest.createFunction(
  {id: "hello-world"},
  {event: "test/hello.world"},
  async({event, step}) => {
    await step.sleep("wait-a-moment", "1s");
    return {event, body: "Hello, World"}
  },
)


export const CreateNewUser = inngest.createFunction(
  {id: "create-user"},
  {event: "user.create"},
  async({event, step}) => {
    // get event data
    const result = await step.run('Check User and create New if Not in DB', async()=>{      // check if user exists or not
          const result = await db.select().from(USER_TABLE)
          .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))
      
          console.log(result)
      
          if(result?.length == 0){
            const userResp = await db.insert(USER_TABLE).values({
              userName:  user?.fullName,
              email: user?.primaryEmailAddress?.emailAddress
            }).returning({id: USER_TABLE.id})
          }
        })
        return "Success"
  },
)