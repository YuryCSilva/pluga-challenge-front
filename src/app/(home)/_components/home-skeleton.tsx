export default function HomeSkeleton() {
  return (
    <>
      {/* Title */}
      <div className='h-8.5 w-64 rounded-md bg-gray-300/60 m-auto' />

      {/* Search */}
      <div className='h-9 w-full rounded-xl bg-gray-300/60' />

      {/* Grid Container */}
      <div
        className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className='flex h-44 flex-col overflow-hidden rounded-xl border
              border-gray-200'
          >
            {/* Icon */}
            <div className='h-24 w-full bg-gray-300/60' />

            {/* Text */}
            <div className='mt-4 ml-4 h-6 w-24 rounded bg-gray-300/60' />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='h-9 w-1/2 m-auto rounded-xl bg-gray-300/60' />
    </>
  );
}
