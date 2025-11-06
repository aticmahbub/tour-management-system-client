import SingleImageUploader from '@/components/SingleImageUploader';
import {Button} from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {useCreateDivisionMutation} from '@/redux/features/division/division.api';
import {useState} from 'react';
import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';
import {toast} from 'sonner';

export function AddDivisionModal() {
    const [image, setImage] = useState<File | null>(null);
    const [open, setOpen] = useState(false);
    const form = useForm();

    const [createDivision] = useCreateDivisionMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating division...');

        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        formData.append('file', image as File);

        try {
            const res = await createDivision(formData).unwrap();
            if (res.success) {
                toast.success('Division is created successfully', {
                    id: toastId,
                });
                setOpen(false);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error('Failed to create division', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='outline'>Add division</Button>
            </DialogTrigger>

            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add New division</DialogTitle>
                    <DialogDescription>
                        Enter a name for your new division type and click
                        “Save”.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        id='add-division'
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='grid gap-4'
                    >
                        <FormField
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Enter division</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Tour'
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Enter description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder='Description'
                                            {...field}
                                            value={field.value || ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                    <SingleImageUploader onChange={setImage} />
                </Form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button form='add-division' type='submit'>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
