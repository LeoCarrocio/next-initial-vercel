
import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout'

export default function contactPage() {
  return (
    <MainLayout> 
        <h2>Contact</h2>
       <h1 className={'title'}>
          ir a  <Link href="/">Inicio!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLayout>
  )
}