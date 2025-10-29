import {baseApi} from '@/redux/baseApi';
import type {IResponse, ISendOTP} from '@/types';

const otpApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendOtp: builder.mutation<IResponse<null>, ISendOTP>({
            query: (userInfo) => ({
                url: '/otp/send',
                method: 'POST',
                data: userInfo,
            }),
        }),
    }),
});

export const {useSendOtpMutation} = otpApi;
