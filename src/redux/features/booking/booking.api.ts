import {baseApi} from '@/redux/baseApi';

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (bookingInfo) => ({
                url: '/booking',
                method: 'POST',
                data: bookingInfo,
            }),
            invalidatesTags: ['BOOKING'],
        }),
        // verifyOtp: builder.mutation<IResponse<null>, IVerifyOTP>({
        //     query: (userInfo) => ({
        //         url: '/otp/verify',
        //         method: 'POST',
        //         data: userInfo,
        //     }),
        // }),
    }),
});

export const {useCreateBookingMutation} = bookingApi;
