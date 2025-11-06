import {baseApi} from '@/redux/baseApi';
import type {IResponse, ITour} from '@/types';

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTour: builder.mutation({
            query: (tourData) => ({
                url: '/tour/create',
                method: 'POST',
                data: tourData,
            }),
            invalidatesTags: ['TOUR-TYPE'],
        }),
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
                url: `/tour/tour-types/${tourTypeId}`,
                method: 'DELETE',
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

        getTours: builder.query<ITour[], unknown>({
            query: () => ({
                url: '/tour',
                method: 'GET',
            }),
            providesTags: ['TOUR'],
            transformResponse: (res: IResponse<ITour[]>) => res.data,
        }),
    }),
});

export const {
    useGetTourTypesQuery,
    useCreateTourTypeMutation,
    useDeleteTourTypeMutation,
    useCreateTourMutation,
} = tourApi;
