import AppRoutes from './AppRoutes';
import { AuthProvider } from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
};

export default App;