import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { CalculatorProvider } from './CalculatorContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </StrictMode>
);
