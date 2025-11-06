import {baseApi} from '@/redux/baseApi';

export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createDivision: builder.mutation({
            query: (divisionData) => ({
                url: '/division/create',
                method: 'POST',
                data: divisionData,
            }),
            invalidatesTags: ['DIVISION'],
        }),

        getDivisions: builder.query({
            query: () => ({
                url: '/division',
                method: 'GET',
            }),
            providesTags: ['DIVISION'],
            transformResponse: (res) => res.data,
        }),
    }),
});

export const {useCreateDivisionMutation, useGetDivisionsQuery} = divisionApi;
