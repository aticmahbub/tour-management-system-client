import {baseApi} from '@/redux/baseApi';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                data: userInfo,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
                // data: userInfo,
            }),
            invalidatesTags: ['USER'],
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
            providesTags: ['USER'],
        }),
    }),
});

export const {
    useRegistrationMutation,
    useLoginMutation,
    useUserInfoQuery,
    useLogoutMutation,
} = authApi;
