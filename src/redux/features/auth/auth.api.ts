import {baseApi} from '@/redux/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                data: userInfo,
            }),
        }),
        registration: builder.mutation({
            query: (userInfo) => ({
                url: '/user/register',
                method: 'POST',
                data: userInfo,
            }),
        }),
        userInfo: builder.query({
            query: () => ({
                url: '/user/me',
                method: 'GET',
                // data: userInfo,
            }),
        }),
    }),
});

export const {useRegistrationMutation, useLoginMutation, useUserInfoQuery} =
    authApi;
