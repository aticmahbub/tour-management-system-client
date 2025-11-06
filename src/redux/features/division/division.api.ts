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

        // getTourTypes: builder.query({
        //     query: () => ({
        //         url: '/tour/tour-types',
        //         method: 'GET',
        //     }),
        //     providesTags: ['TOUR-TYPE'],
        //     transformResponse: (res) => res.data,
        // }),
    }),
});

export const {useCreateDivisionMutation} = divisionApi;
