import MovieThumbnail from 'components/MovieThumbnail'

export default function MoviesCollection({ results, title }) {
  return (
    <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto'>
      <h2 className='font-semibold'>{title}</h2>
      <div className='flex overflow-y-hidden space-x-6 p-2 -m-2 scrollbar-hide '>
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  )
}
