import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { http } from 'viem'
import { WagmiProvider, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { BetSwirlSDKProvider } from '@betswirl/ui'
import '@betswirl/ui/styles.css'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient()
const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider chain={base}>
          <BetSwirlSDKProvider initialChainId={base.id}>
            <App />
          </BetSwirlSDKProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)