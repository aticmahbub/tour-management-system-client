import {baseApi} from '@/redux/baseApi';

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTourType: builder.mutation({
            query: (tourTypeName) => ({
                url: '/tour/create-tour-type',
                method: 'DELETE',
                data: tourTypeName,
            }),
            invalidatesTags: ['TOUR-TYPE'],
        }),

        deleteTourType: builder.mutation({
            query: (tourTypeId) => ({
                url: '/tour/create-tour-type',
                method: 'POST',
                data: tourTypeId,
            }),
            invalidatesTags: ['TOUR-TYPE'],
        }),

        getTourTypes: builder.query({
            query: () => ({
                url: '/tour/tour-types',
                method: 'GET',
            }),
            providesTags: ['TOUR-TYPE'],
            transformResponse: (res) => res.data,
        }),
    }),
});

export const {
    useGetTourTypesQuery,
    useCreateTourTypeMutation,
    useDeleteTourTypeMutation,
} = tourApi;
