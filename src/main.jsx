import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import Dashbord from './pages/Dashboard/index.jsx'
import { store } from './store/index.js'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <Dashbord/>
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
