import {baseApi} from '@/redux/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (userInfo) => ({
                url: 'user/register',
                method: 'POST',
                body: userInfo,
            }),
        }),
    }),
});

export const {useRegistrationMutation} = authApi;
