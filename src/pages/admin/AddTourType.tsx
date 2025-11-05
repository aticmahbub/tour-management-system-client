import {DeleteConfirmation} from '@/components/DeleteConfirmation';
import {AddTourTypeModal} from '@/components/modules/admin/tour/tourTypes/AddTourTypeModal';
import {Button} from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    useDeleteTourTypeMutation,
    useGetTourTypesQuery,
} from '@/redux/features/tour/tour.api';
import {Trash2} from 'lucide-react';
import {toast} from 'sonner';

function AddTourType() {
    const {data, isLoading, isError} = useGetTourTypesQuery(undefined);
    const [deleteTourType] = useDeleteTourTypeMutation();

    const handleDeleteTourType = async (tourId: string) => {
        const toastId = toast.loading('Deleting toast...');
        try {
            const res = await deleteTourType(tourId).unwrap();
            console.log(res);
            if (res.success) {
                toast.success('Removed', {id: toastId});
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error('Could not delete ', error);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Failed to load tour types</p>;

    return (
        <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='flex justify-between my-8'>
                <h1 className='text-xl font-semibold'>Tour types</h1>
                <AddTourTypeModal />
            </div>

            <div className='border border-muted rounded-md'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[100px]'>Name</TableHead>
                            <TableHead className='text-right'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.map((item: {name: string; _id: string}) => (
                            <TableRow key={item._id}>
                                <TableCell className='font-medium w-full'>
                                    {item.name}
                                </TableCell>
                                <TableCell className='text-right'>
                                    <DeleteConfirmation
                                        onConfirm={() =>
                                            handleDeleteTourType(item._id)
                                        }
                                    >
                                        <Button size='sm' variant='destructive'>
                                            <Trash2 />
                                        </Button>
                                    </DeleteConfirmation>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default AddTourType;
