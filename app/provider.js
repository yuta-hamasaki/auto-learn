"use client"
// import {USER_TABLE} from "@/configs/schema"
// import {db} from "@/configs/db"
// import {eq} from "drizzle-orm"
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react';
import axios from 'axios';


export default function Provider({ children }) {

  const {user} = useUser()

    useEffect(()=>{
      user&&CheckIsNewUser()
    },[user])


  const CheckIsNewUser= async()=>{
    // const result = await db.select().from(USER_TABLE)
    // .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

    // console.log(result)

    // if(result?.length == 0){
    //   const userResp = await db.insert(USER_TABLE).values({
    //     userName:  user?.fullName,
    //     email: user?.primaryEmailAddress?.emailAddress
    //   }).returning({id: USER_TABLE.id})

    //   console.log(userResp)
    // }

    const res = await axios.post('/api/create-user', { user: user})

    console.log(res.data)
  }
  return (
    <div> 
      {children}
    </div>
  )
}