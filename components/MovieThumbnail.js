import Image from 'next/image'
import { useRouter } from 'next/router'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

export default function MovieThumbnail({ result }) {
  const router = useRouter()
  return (
    <div
      className='flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] 
      border-[3px] border-opacity-10 rounded-lg overflow-hidden cursor-pointer shadow-xl border-[#f9f9f9] 
      hover:border-opacity-80 hover:scale-105 hover:shadow-2xl
      transition duration-300
      '
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit='cover'
        className='rounded-lg'
        onClick={() => router.push(`/movie/${result.id}`)}
      />
    </div>
  )
}
