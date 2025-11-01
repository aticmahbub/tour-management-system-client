import type {ComponentType} from 'react';

export type {ISendOTP, IVerifyOTP} from './otp.types';
export type {ILogin} from './login.types';

export interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    data: T;
}

export interface ISideBarItems {
    title: string;

    items: {title: string; url: string; component: ComponentType}[];
}
