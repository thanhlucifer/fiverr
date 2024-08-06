import { http } from "./config"

export const authservice = {
    signIn: (data) => {
        return http.post('/auth/signin', data)
    },
    signUp: (data) => {
        return http.post('/auth/signup', data)
    }
}