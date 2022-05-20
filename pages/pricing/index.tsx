
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function Pricing() {
  return (

    <MainLayout>
        <h2>Pricing</h2>
        <h1 className={'title'}>
          ir a  <Link href="/about">about</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
   
  )
}