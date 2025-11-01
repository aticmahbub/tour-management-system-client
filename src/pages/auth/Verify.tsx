import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {InputOTP, InputOTPGroup, InputOTPSlot} from '@/components/ui/input-otp';
import {cn} from '@/lib/utils';
import {
    useSendOtpMutation,
    useVerifyOtpMutation,
} from '@/redux/features/otp/otp.api';
import {zodResolver} from '@hookform/resolvers/zod';
import {Dot} from 'lucide-react';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useLocation, useNavigate} from 'react-router';
import {toast} from 'sonner';
import z from 'zod';

const FormSchema = z.object({
    otp: z.string().min(6, {
        message: 'Your one-time password must be 6 characters.',
    }),
});

function Verify() {
    const location = useLocation();
    const navigate = useNavigate();

    const [email] = useState(location.state);
    console.log(email);

    const [confirmed, setConfirmed] = useState(false);

    const [sendOtp] = useSendOtpMutation();
    const [verifyOtp] = useVerifyOtpMutation();
    const [timer, setTimer] = useState(10);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            otp: '',
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        console.log(data);
        const toastId = toast.loading('Verifying OTP');
        const userInfo = {email: email.email, otp: data.otp};
        try {
            const res = await verifyOtp(userInfo).unwrap();
            console.log(res);
            if (res.success) {
                toast.success('Otp is verified successfully', {id: toastId});
                setConfirmed(true);
                navigate('dashboard');
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.status === 406) {
                toast.error('Invalid Otp');
            }
        }
    };

    const handleSendOtp = async () => {
        const toastId = toast.loading('Sending OTP');
        try {
            const res = await sendOtp(email).unwrap();
            if (res.success) {
                toast.success('OTP sent successfully', {id: toastId});
                setConfirmed(true);
                setTimer(0);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.status === 404) {
                toast.success('Already verified', {id: toastId});
            }
        }
        setConfirmed(true);
        setTimer(129);
    };

    useEffect(() => {
        if (!email) {
            navigate('/');
        }
    }, [email]);

    useEffect(() => {
        if (!email || !confirmed) {
            return;
        }
        const timerId = setInterval(() => {
            if (email && confirmed) {
                setTimer((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
            }
        }, 1000);
        return () => clearInterval(timerId);
    }, [email, confirmed]);
    return (
        <div className='grid place-content-center h-screen'>
            {confirmed ? (
                <Card>
                    <CardHeader>
                        <CardTitle className='text-xl'>
                            Verify your email address
                        </CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form
                                id='otp-form'
                                onSubmit={form.handleSubmit(onSubmit)}
                                className='space-y-6'
                            >
                                <FormField
                                    control={form.control}
                                    name='otp'
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>
                                                One-Time Password
                                            </FormLabel>
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    {...field}
                                                >
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={0}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={1}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={2}
                                                        />
                                                    </InputOTPGroup>
                                                    <Dot />
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={3}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={4}
                                                        />
                                                    </InputOTPGroup>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot
                                                            index={5}
                                                        />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormDescription className=''>
                                                <Button
                                                    className={cn('p-0 m-0', {
                                                        'cursor-pointer':
                                                            timer === 0,
                                                        'text-grey-5000':
                                                            timer !== 0,
                                                    })}
                                                    disabled={timer !== 0}
                                                    onClick={handleSendOtp}
                                                    type='button'
                                                    variant='link'
                                                >
                                                    Resend OTP
                                                </Button>{' '}
                                                {timer}
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button
                            //  onClick={}
                            form='otp-form'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className='text-xl'>
                            Verify your email address
                        </CardTitle>
                        <CardDescription>
                            We will send an OTP to <br />
                            {/* {email} */}
                        </CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button
                            onClick={handleConfirm}
                            form='otp-form'
                            type='submit'
                            className='w-[300px]'
                        >
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}

export default Verify;
