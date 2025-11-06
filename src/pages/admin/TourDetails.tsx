import {Button} from '@/components/ui/button';

export default function TourDetails() {
    const mockImages = Array(3).fill(null);
    const mockAmenities = Array(4).fill(null);
    const mockPlan = Array(5).fill(null);

    return (
        <div className='container mx-auto p-6 animate-pulse'>
            {/* Header */}
            <div className='flex justify-between items-center mb-8'>
                <div>
                    <div className='h-8 w-64 bg-muted rounded mb-2' />
                    <div className='flex gap-4 text-gray-600 mb-4'>
                        <div className='h-4 w-24 bg-muted rounded' />
                        <div className='h-4 w-24 bg-muted rounded' />
                        <div className='h-4 w-24 bg-muted rounded' />
                    </div>
                </div>
                <div className='h-10 w-28 bg-muted rounded' />
            </div>

            {/* Images */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                {mockImages.map((_, i) => (
                    <div key={i} className='w-full h-48 bg-muted rounded-lg' />
                ))}
            </div>

            {/* Tour Info */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                <div className='space-y-3'>
                    <div className='h-5 w-40 bg-muted rounded mb-2' />
                    {Array(6)
                        .fill(null)
                        .map((_, i) => (
                            <div
                                key={i}
                                className='h-4 w-2/3 bg-muted rounded'
                            />
                        ))}
                </div>

                <div>
                    <div className='h-5 w-32 bg-muted rounded mb-3' />
                    <div className='h-24 w-full bg-muted rounded' />
                </div>
            </div>

            {/* Amenities & Inclusions */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                {[...Array(3)].map((_, i) => (
                    <div key={i}>
                        <div className='h-5 w-32 bg-muted rounded mb-3' />
                        <ul className='space-y-2'>
                            {mockAmenities.map((_, j) => (
                                <li
                                    key={j}
                                    className='h-4 w-2/3 bg-muted rounded'
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Tour Plan */}
            <div className='mb-8'>
                <div className='h-5 w-32 bg-muted rounded mb-3' />
                <ol className='space-y-3'>
                    {mockPlan.map((_, i) => (
                        <li key={i} className='flex items-center'>
                            <div className='bg-muted rounded-full w-6 h-6 mr-3' />
                            <div className='h-4 w-3/4 bg-muted rounded' />
                        </li>
                    ))}
                </ol>
            </div>

            {/* Book Now Button */}
            <div className='flex justify-center'>
                <Button disabled className='opacity-50 w-48'>
                    Book Now
                </Button>
            </div>
        </div>
    );
}
