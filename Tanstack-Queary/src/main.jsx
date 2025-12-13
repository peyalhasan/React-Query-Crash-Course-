import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProductContextProvider from './Provider/ProductContextProvider.jsx'

const quearClient = new QueryClient({
  defaultOptions:{
    queries:{
      // staleTime: 5000,
    }
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextProvider>
    <QueryClientProvider client={quearClient} >
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ProductContextProvider>
  </StrictMode>
)

