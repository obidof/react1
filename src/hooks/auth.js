import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { instance } from "./api"
const register = async ({ registerData }) => {
    const response = await instance.post('/auth/register', registerData)
    return response.data
}

export const useRegister = () => {
    const registerMutation = useMutation({
        mutationFn: register,
        onSuccess: (data,vars) => {
            if(vars.onSuccess){
                vars.onSuccess(data)
            }
            // console.log(data)
        },
        onError: (err,vars) => {
            if(vars.onError){
                vars.onError(err)
            }
            // console.log(err)
        }
    })

    return registerMutation
}

// ------------------ login -----------------
const login = async ({ LoginData }) => {
    const response = await instance.post('/auth/login', LoginData)
    return response.data
}

export const uselogin = () => {
    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: (data,vars) => {
            if(vars.onSuccess){
                vars.onSuccess(data)
            }
            // console.log(data)
        },
        onError: (err,vars) => {
            if(vars.onError){
                vars.onError(err)
            }
            // console.log(err)
        }
    })

    return loginMutation
}