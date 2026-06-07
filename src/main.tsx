import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safe interceptor for MetaMask and other chrome-extension errors triggered by iframe sandbox constraints
if (typeof window !== 'undefined') {
  const silentExtensionErrorShield = (event: ErrorEvent | PromiseRejectionEvent) => {
    try {
      const errorMessage = 'message' in event ? event.message || '' : '';
      const rejectionReason = 'reason' in event && event.reason 
        ? String(event.reason.message || event.reason) 
        : '';

      const isExtensionRelated = 
        /metamask/i.test(errorMessage) || 
        /metamask/i.test(rejectionReason) || 
        /ethereum/i.test(errorMessage) || 
        /ethereum/i.test(rejectionReason) ||
        errorMessage.includes('MetaMask') || 
        rejectionReason.includes('MetaMask') ||
        errorMessage.includes('Wallet') ||
        rejectionReason.includes('Wallet');

      if (isExtensionRelated) {
        event.preventDefault?.();
        event.stopPropagation?.();
        console.debug('Handled and silenced sandbox-restricted extension interaction safely.');
        return true;
      }
    } catch (e) {
      // Fallback
    }
  };

  window.addEventListener('error', silentExtensionErrorShield, true);
  window.addEventListener('unhandledrejection', silentExtensionErrorShield, true);

  // Fallback MetaMask Provider Shim to prevent empty reference failures in sandboxed environment
  if (!(window as any).ethereum) {
    (window as any).ethereum = {
      isMetaMask: true,
      request: async (args: any) => {
        console.debug('Shimmed sandboxed request:', args);
        if (args?.method === 'eth_requestAccounts' || args?.method === 'eth_accounts') {
          return [];
        }
        return null;
      },
      on: () => {},
      removeListener: () => {}
    };
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

