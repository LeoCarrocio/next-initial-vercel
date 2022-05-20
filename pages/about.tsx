
import Link from 'next/link'
import { Darklayout } from '../components/layouts/Darklayout'
import {MainLayout} from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h2>About</h2>
       <h1 className={'title'}>
          ir a  <Link href="/">Inicio!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>
    </>
  )
}

AboutPage.getLayout = function getLayout (page:JSX.Element){
  return (
    <MainLayout>
      <Darklayout>
        {page}
      </Darklayout>
    </MainLayout>
  )
} 

