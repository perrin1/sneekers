// import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";
declare module "next-auth" {
//   interface User {
//     name: string;
//     id?: string;
//   }


  interface Session {
    user: DefaultSession['user'] & {
      
      id?: string;
    };
    
  }
}
