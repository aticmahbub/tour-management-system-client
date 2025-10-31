export type {ISendOTP, IVerifyOTP} from './otp.types';
export type {ILogin} from './login.types';

export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
}
