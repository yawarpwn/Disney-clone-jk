import Head from 'next/head'
import Image from 'next/image'
export default function Hero() {
  return (
    <section>
      <Head>
        <title>Log in | Disney +</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative min-h-[calc(100vh-72px)]'>
        <Image
          src='/images/hero-background.jpg'
          layout='fill'
          objectFit='cover'
        />
        <div className='flex flex-col  items-center justify-center'>
          <div
            className='absolute top-1/4 w-full max-w-screen-sm 
            mx-auto p-8 -mt-16 space-y-8 flex flex-col items-center justify-center'
          >
            <Image
              src='/images/cta-logo-one.svg'
              width={600}
              height={150}
              objectFit='contain'
            />
            <button
              className='bg-blue-600 uppercase font-extrabold 
              tracking-wide text-xl px-4 py-6 w-full rounded
              hover:bg-[#0485ee]
              '
            >
              Get All there
            </button>
            <p className='text-sm text-center'>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $
            </p>
            <Image src='/images/cta-logo-two.png' width={600} height={70} objectFit='contain'  />
          </div>
        </div>
      </div>
    </section>
  )
}
