import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {cn} from '@/lib/utils';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Password from '@/components/ui/Password';

const userRegistrationSchema = z
    .object({
        name: z
            .string()
            .min(3, {
                error: 'Name is too short',
            })
            .max(50),
        email: z.email(),
        password: z.string().min(8, {error: 'Password is too short'}),
        confirmPassword: z
            .string()
            .min(8, {error: 'Confirm Password is too short'}),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Password do not match',
        path: ['confirmPassword'],
    });

function RegistrationForm({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const form = useForm<z.infer<typeof userRegistrationSchema>>({
        resolver: zodResolver(userRegistrationSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data: z.infer<typeof userRegistrationSchema>) => {
        console.log(data);
    };
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            {/* Header */}
            <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Register your account</h1>
                <p className='text-sm text-muted-foreground'>
                    Enter your details to create an account
                </p>
            </div>

            {/* Form Fields */}
            <div className='grid gap-6'>
                <Form {...form}>
                    <form
                        className='space-y-6'
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        {/* name */}
                        <FormField
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='John Doe'
                                            type='text'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className='sr-only'>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* email */}
                        <FormField
                            control={form.control}
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='john@example.com'
                                            type='email'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className='sr-only'>
                                        This is your email id.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* password */}
                        <FormField
                            control={form.control}
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className='sr-only'>
                                        This is your password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* confirm password */}
                        <FormField
                            control={form.control}
                            name='confirmPassword'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className='sr-only'>
                                        This is your confirm password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type='submit' className='w-full'>
                            Submit
                        </Button>
                    </form>
                </Form>

                {/* Divider */}
                <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
                    <span className='relative z-10 bg-background px-2 text-muted-foreground'>
                        Or continue with
                    </span>
                </div>

                {/* Google Login Button */}
                <Button
                    type='button'
                    variant='outline'
                    className='w-full cursor-pointer'
                >
                    Login with Google
                </Button>
            </div>

            {/* Footer */}
            <div className='text-center text-sm'>
                Already have an account?{' '}
                <Link to='/login' className='underline underline-offset-4'>
                    Login
                </Link>
            </div>
        </div>
    );
}

export default RegistrationForm;

//  <div className='space-y-2'>
//                             <label className='text-sm font-medium'>Name</label>
//                             <Input placeholder='John Doe' />
//                         </div>

//                         <div className='space-y-2'>
//                             <label className='text-sm font-medium'>Email</label>
//                             <Input
//                                 placeholder='john.doe@company.com'
//                                 type='email'
//                             />
//                         </div>

//                         <div className='space-y-2'>
//                             <label className='text-sm font-medium'>
//                                 Password
//                             </label>
//                             <Input placeholder='••••••••' type='password' />
//                         </div>

//                         <div className='space-y-2'>
//                             <label className='text-sm font-medium'>
//                                 Confirm Password
//                             </label>
//                             <Input placeholder='••••••••' type='password' />
//                         </div>
