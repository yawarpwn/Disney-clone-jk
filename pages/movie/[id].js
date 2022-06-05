import Header from 'components/Header'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Hero from 'components/Hero'
export default function MoviePage({ result, session }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
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
