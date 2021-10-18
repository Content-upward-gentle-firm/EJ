/*
 * @Author: your name
 * @Date: 2021-09-10 16:52:26
 * @LastEditTime: 2021-09-13 10:03:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ej-webui\src\store\modules\EmloyeeAccount.js
 */
import request from '@/utils/request'

export default {
    namespaced: true,
    state() {
        return {

        }
    },
    mutations: {

    },
    actions: {
        async findAllEmployeeAccount() {
            let res = await request.get('/baseUser/pageQuery', {
                params: { page: 1, pageSize: 1000 }
            });
            return res
        }
    }
}