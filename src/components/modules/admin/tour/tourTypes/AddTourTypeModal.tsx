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
import {useCreateTourTypeMutation} from '@/redux/features/tour/tour.api';
import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';
import {toast} from 'sonner';

export function AddTourTypeModal() {
    const [createTourType] = useCreateTourTypeMutation();
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        createTourType(data);
        toast.success('Tour type created');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline'>Add Tour Type</Button>
            </DialogTrigger>

            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>Add New Tour Type</DialogTitle>
                    <DialogDescription>
                        Enter a name for your new tour type and click “Save”.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        id='add-tour-type'
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='grid gap-4'
                    >
                        <FormField
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Enter tour type</FormLabel>
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
                    </form>
                </Form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                    <Button form='add-tour-type' type='submit'>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
