import { createAsyncThunk } from "@reduxjs/toolkit"

export const userSignup = createAsyncThunk(
    'user/signup',

    async (data: {name: string, email: string}) => {
        
    }
)

export {}