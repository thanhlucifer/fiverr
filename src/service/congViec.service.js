import { http } from "./config"
export const congviecservice = {
    layCongViecTheoTen: (data) => {
        return http.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`)
    },
    getJobDetail: (id) => {
        return http.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
    },
    jobDefault: () => {
        return http.get(`cong-viec/`);
    },
    layBinhLuantheoCongViec: (id) => {
        return http.get(`binh-luan/lay-binh-luan-theo-cong-viec/${id}`)
    }
}