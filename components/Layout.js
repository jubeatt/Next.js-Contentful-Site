import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SpinnerCircular } from 'spinners-react'

export default function Layout({ children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    function onRouteChangeStart() {
      console.log('onRouteChangeStart')
      setLoading(true)
    }

    function onRouteChangeComplete() {
      console.log('onRouteChangeComplete')
      setLoading(false)
    }

    function onRouteChangeError() {
      alert('Ooops! something goes wrong.')
      setLoading(false)
    }

    router.events.on('routeChangeStart', onRouteChangeStart)
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    router.events.on('routeChangeError', onRouteChangeError)

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart)
      router.events.off('routeChangeComplete', onRouteChangeComplete)
      router.events.off('routeChangeError', onRouteChangeError)
    }
  }, [])

  useEffect(() => {
    console.log('loading', loading)
  }, [loading])

  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a>
            <h1>
              <span>Just Add</span>
              <span>Peanut</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className='page-content'>
        {loading ? (
          <div className='loading-backdrop'>
            <SpinnerCircular
              className='spinner'
              size={70}
              thickness={100}
              speed={100}
              color='#f4e640'
              secondaryColor='rgba(0, 0, 0, 0.8)'
            />
          </div>
        ) : (
          children
        )}
      </div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  )
}
