import {baseApi} from '@/redux/baseApi';
import type {IResponse, ISendOTP, IVerifyOTP} from '@/types';

const otpApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendOtp: builder.mutation<IResponse<null>, ISendOTP>({
            query: (userInfo) => ({
                url: '/otp/send',
                method: 'POST',
                data: userInfo,
            }),
        }),
        verifyOtp: builder.mutation<IResponse<null>, IVerifyOTP>({
            query: (userInfo) => ({
                url: '/otp/verify',
                method: 'POST',
                data: userInfo,
            }),
        }),
    }),
});

export const {useSendOtpMutation, useVerifyOtpMutation} = otpApi;
