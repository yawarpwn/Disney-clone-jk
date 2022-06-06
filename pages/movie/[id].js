import Header from 'components/Header'
import { getSession } from 'next-auth/react'
import ReactPlayer from 'react-player'
import Head from 'next/head'
import Image from 'next/image'
import Hero from 'components/Hero'
import { useState, useEffect } from 'react'
import { PlusIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

export default function MoviePage({ result, session }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  const [showPlayer, setShowPlayer] = useState(false)
  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );
  const router = useRouter()

  useEffect(() =>{
    if(!session) {
      router.push('/')
    }
  }, [])

  return (
    <>
      <Head>
        <title>{result.title || result.original_name}</title>
      </Head>
      <div>
        <Header />
        {!session ? (
          <Hero />
        ) : (
          <section className='relative'>
            <div className='min-h-[calc(100vh-72px)]'>
              <Image
                src={
                  `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                  `${BASE_URL}${result.poster_path}`
                }
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-8 space-y-6 z-50'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-shadow-lg'>
                {result.title || result.original_name}
              </h1>
              <div className='flex items-center space-x-3 md:space-x-6'>
                <button
                  className='text-xs md:text-base bg-[#f9f9f9] text-black
                    flex items-center justify-center py-2.5 px-6 rounded
                    hover:bg-[#c6c6c6]
                    '
                >
                  <img
                    src='/images/play-icon-black.svg'
                    alt='heart'
                    className='h-6 md:h-8'
                  />
                  <span className='uppercase font-medium tracking-wide'>
                    Play
                  </span>
                </button>
                <button
                  className='text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] 
                    flex items-center justify-center py-2.5 px-6 rounded
                    hover:bg-[#c6c6c6]
                    '
                  onClick={() => setShowPlayer(true)}
                >
                  <img
                    src='/images/play-icon-white.svg'
                    alt='heart'
                    className='h-6 md:h-8'
                  />
                  <span className='uppercase font-medium tracking-wide'>
                    Trailer
                  </span>
                </button>
                <div
                  className='border-2 border-white rounded-full w-11 h-11 flex items-center justify-center
                    bg-black/50 cursor-pointer
                    '
                >
                  <PlusIcon className='h-6' />
                </div>
                <div
                  className='border-2 border-white rounded-full w-11 h-11 flex items-center justify-center
                    bg-black/50 cursor-pointer
                    '
                >
                  <img src='/images/group-icon.svg' />
                </div>
              </div>
              <p>
                {result.release_date || result.first_air_date} •{' '}
                {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{' '}
                {result.genres.map((genre) => genre.name + ' ')}{' '}
              </p>
              <h4 className='text-xl max-w-4xl'>{result.overview}</h4>
            </div>
            {/* bg section */}
            {showPlayer && (
              <div className='absolute inset-0 bg-black opacity-50 h-full w-full z-50'></div>
            )}
            <div
              className={`absolute  top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000
                    ${showPlayer ? 'opacity-100 z-50' : 'opacity-0'}`}
            >
              <div className='bg-black text-[#f9f9f9] flex items-center justify-between p-3.5'>
                <span className='font-semibold'>Play Trailer</span>
                <div
                  onClick={() => setShowPlayer(false)}
                  className='w-8 h-8 flex items-center justify-center cursor-pointer opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]'
                >
                  <XIcon className='h-5' />
                </div>
              </div>
              <div className='relative pt-[56.25%]'>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                  width='100%'
                  height='100%'
                  style={{ position: 'absolute', top: '0', left: '0' }}
                  controls={true}
                  playing={showPlayer}
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const { id } = context.query
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json())

  return {
    props: {
      result: request,
      session,
    },
  }
}
