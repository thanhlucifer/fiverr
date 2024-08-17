import { http } from "./config"

export const nguoiDungService = {
    getListUser: () => {
        return http.get('/users')
    },
    deleteUser: (id) => {
        return http.delete(`/users?id=${id}`)
    }
}