import {Button} from '@/components/ui/button';

export default function BookingSkeleton() {
    return (
        <div className='flex flex-col md:flex-row gap-8 p-6 container mx-auto animate-pulse'>
            {/* Left Section - Tour Summary */}
            <div className='flex-1 space-y-6'>
                {/* Image */}
                <div className='w-full h-64 bg-muted rounded-lg' />

                {/* Title & Description */}
                <div>
                    <div className='h-8 w-2/3 bg-muted rounded mb-3' />
                    <div className='h-4 w-full bg-muted rounded mb-2' />
                    <div className='h-4 w-3/4 bg-muted rounded mb-6' />

                    {/* Tour Info Grid */}
                    <div className='grid grid-cols-2 gap-4 text-sm'>
                        {Array(4)
                            .fill(null)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className='h-4 w-2/3 bg-muted rounded'
                                />
                            ))}
                    </div>
                </div>

                {/* What's Included */}
                <div>
                    <div className='h-6 w-48 bg-muted rounded mb-3' />
                    <ul className='space-y-2'>
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    key={i}
                                    className='h-4 w-2/3 bg-muted rounded'
                                />
                            ))}
                    </ul>
                </div>

                {/* Tour Plan */}
                <div>
                    <div className='h-6 w-40 bg-muted rounded mb-3' />
                    <ol className='space-y-2'>
                        {Array(5)
                            .fill(null)
                            .map((_, i) => (
                                <li
                                    key={i}
                                    className='h-4 w-3/4 bg-muted rounded'
                                />
                            ))}
                    </ol>
                </div>
            </div>

            {/* Right Section - Booking Details */}
            <div className='w-full md:w-96'>
                <div className='border border-muted p-6 rounded-lg shadow-md sticky top-6 space-y-6'>
                    <div className='h-6 w-40 bg-muted rounded mb-4' />

                    {/* Guest Counter */}
                    <div className='space-y-2'>
                        <div className='h-4 w-32 bg-muted rounded' />
                        <div className='flex items-center space-x-3'>
                            <div className='w-8 h-8 bg-muted rounded-full' />
                            <div className='h-6 w-10 bg-muted rounded' />
                            <div className='w-8 h-8 bg-muted rounded-full' />
                        </div>
                    </div>

                    {/* Price Details */}
                    <div className='border-t pt-4 space-y-2'>
                        {Array(3)
                            .fill(null)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className='flex justify-between text-sm mb-1 text-gray-500'
                                >
                                    <div className='h-4 w-24 bg-muted rounded' />
                                    <div className='h-4 w-16 bg-muted rounded' />
                                </div>
                            ))}
                    </div>

                    <Button disabled className='opacity-50 w-full mt-4'>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
