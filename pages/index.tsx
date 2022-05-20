
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function Home() {
  return (

    <MainLayout>
      <h1 className={'title'}>
          ir a  <Link href="/about">about</Link>
        </h1>
        <h2>Home</h2>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
   
  )
}
