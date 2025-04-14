import ReactQueryProvider from './_components/ReactQueryProvider';
import { ReactNode } from 'react';


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <h1>Jornalzinho dev</h1>
      {children}
    </ReactQueryProvider>
  )
}

export default Layout