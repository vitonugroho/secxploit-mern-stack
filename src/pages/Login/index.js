import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Please fill in both fields');
    } else {
      setError('');
      console.log('Logged in:', { username, password });
      // Implement login logic here, for example using an API.
    }
  };

  return (
    <div id="Login" className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Login</h2>
        
        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 text-lg text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">Don't have an account? </span>
          <a href="/register" className="text-indigo-600 hover:underline text-sm">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
