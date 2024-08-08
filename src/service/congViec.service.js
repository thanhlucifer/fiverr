import { http } from "./config"
export const congviecservice = {
    layCongViecTheoTen: (data) => {
        return http.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`)
    }
}