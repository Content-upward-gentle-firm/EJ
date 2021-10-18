/*
 * @Author: your name
 * @Date: 2021-09-13 16:47:47
 * @LastEditTime: 2021-09-13 16:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ej-webui\src\store\modules\customerAccount.js
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
        async findAllCustomerAccount() {
            let res = await request.get('/baseUser/pageQuery', {
                params: { page: 1, pageSize: 1000 }
            });
            return res
        }
    }
}