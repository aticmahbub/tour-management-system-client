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
import {useGetTourTypesQuery} from '@/redux/features/tour/tour.api';
import {Trash2} from 'lucide-react';

function AddTourType() {
    const {data, isLoading, isError} = useGetTourTypesQuery(undefined);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Failed to load tour types</p>;

    console.log('Tour types:', data);

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
                                    <Button size='sm' variant='destructive'>
                                        <Trash2 />
                                    </Button>
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
