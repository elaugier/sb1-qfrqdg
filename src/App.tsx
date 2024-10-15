import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserManager, User } from 'oidc-client-ts';
import { Home, Grid, User as UserIcon, BookOpen, PenTool, Gift, ShoppingBag, Store } from 'lucide-react';

// Import micro-frontend modules
import Profile from './modules/Profile';
import Learning from './modules/Learning';
import Creating from './modules/Creating';
import Contributing from './modules/Contributing';
import Producing from './modules/Producing';
import Selling from './modules/Selling';
import Marketplace from './modules/Marketplace';

// OIDC Configuration
const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY || 'https://your-oidc-provider.com',
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID || 'your-client-id',
  redirect_uri: `${window.location.origin}/callback`,
  response_type: 'code',
  scope: 'openid profile email',
};

const userManager = new UserManager(oidcConfig);

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setUser(user);
      }
    }).catch((err) => {
      console.error('Failed to get user:', err);
      setError('Failed to initialize user. Please check your OIDC configuration.');
    });
  }, []);

  const login = () => {
    userManager.signinRedirect().catch((err) => {
      console.error('Failed to start login process:', err);
      setError('Failed to start login process. Please check your OIDC configuration.');
    });
  };

  const logout = () => {
    userManager.signoutRedirect().catch((err) => {
      console.error('Failed to start logout process:', err);
      setError('Failed to start logout process.');
    });
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
          <p className="mt-4 text-sm text-gray-500">
            Please make sure you've set up your OIDC configuration correctly in your environment variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <Home className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">Micro-Frontend App</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/profile" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><UserIcon className="inline-block mr-1" size={18} />Profile</Link>
                  <Link to="/learning" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><BookOpen className="inline-block mr-1" size={18} />Learning</Link>
                  <Link to="/creating" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><PenTool className="inline-block mr-1" size={18} />Creating</Link>
                  <Link to="/contributing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><Gift className="inline-block mr-1" size={18} />Contributing</Link>
                  <Link to="/producing" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><Grid className="inline-block mr-1" size={18} />Producing</Link>
                  <Link to="/selling" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><ShoppingBag className="inline-block mr-1" size={18} />Selling</Link>
                  <Link to="/marketplace" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"><Store className="inline-block mr-1" size={18} />Marketplace</Link>
                </div>
              </div>
              <div className="flex items-center">
                {user ? (
                  <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Logout
                  </button>
                ) : (
                  <button onClick={login} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/creating" element={<Creating />} />
            <Route path="/contributing" element={<Contributing />} />
            <Route path="/producing" element={<Producing />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/" element={<h1 className="text-3xl font-bold text-gray-900">Welcome to the Micro-Frontend App</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;