import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
export const env = createEnv({

    server: { 
        GITHUB_ID: z.string().min(1, { message: 'GITHUB_ID is required' }),
        GITHUB_SECRET: z.string().min(1, { message: 'GITHUB_SECRET is required' }),
     },
    client: {  },
    runtimeEnv: { 
        // DATABASE_URL: process.env.DATABASE_URL,
        // DATABASE_URL_TEST: process.env.DATABASE_URL_TEST,
        
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        
        // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        // OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        // OPENAI_API_ORG: process.env.OPENAI_API_ORG,
        // OPENAI_API_URL: process.env.OPENAI_API_URL,
     },
})   