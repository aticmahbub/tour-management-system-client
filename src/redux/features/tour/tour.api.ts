import {baseApi} from '@/redux/baseApi';

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTourType: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                data: userInfo,
            }),
        }),

        getTourTypes: builder.query({
            query: () => ({
                url: '/tour/tour-types',
                method: 'GET',
            }),
            transformResponse: (res) => res.data,
        }),
    }),
});

export const {useGetTourTypesQuery} = tourApi;
