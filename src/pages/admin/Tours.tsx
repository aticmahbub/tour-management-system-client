import {Button} from '@/components/ui/button';
import {Link} from 'react-router';

export default function Tours() {
    const mockTours = Array(3).fill(null); // Skeleton placeholders

    return (
        <div className='container mx-auto px-5 py-8 grid grid-cols-12 gap-5'>
            {/* <TourFilters /> */}

            <div className='col-span-9 w-full'>
                {mockTours.map((_, i) => (
                    <div
                        key={i}
                        className='border border-muted rounded-lg shadow-md overflow-hidden mb-6 flex animate-pulse'
                    >
                        <div className='w-2/5 bg-muted flex-shrink-0 h-48' />

                        <div className='p-6 flex-1 space-y-4'>
                            <div className='h-5 w-2/3 bg-muted rounded' />
                            <div className='h-3 w-full bg-muted rounded' />
                            <div className='h-3 w-5/6 bg-muted rounded' />

                            <div className='flex items-center justify-between'>
                                <div className='h-4 w-24 bg-muted rounded' />
                                <div className='h-4 w-20 bg-muted rounded' />
                            </div>

                            <div className='grid grid-cols-2 gap-4 text-sm'>
                                {Array(4)
                                    .fill(null)
                                    .map((_, j) => (
                                        <div
                                            key={j}
                                            className='h-3 w-28 bg-muted rounded'
                                        />
                                    ))}
                            </div>

                            <div className='flex flex-wrap gap-2'>
                                {Array(3)
                                    .fill(null)
                                    .map((_, j) => (
                                        <div
                                            key={j}
                                            className='h-5 w-16 bg-muted rounded-full'
                                        />
                                    ))}
                            </div>

                            <Button disabled className='w-full opacity-50'>
                                <Link to='#'>View Details</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
