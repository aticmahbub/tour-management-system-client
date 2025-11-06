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
import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';

export function AddDivisionModal() {
    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <Dialog>
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
