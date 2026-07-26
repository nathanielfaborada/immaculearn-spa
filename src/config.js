const config = {
  API_KEY: import.meta.env.VITE_API_KEY,
  APP_URL: import.meta.env.VITE_APP_URL,
  VITE_ENV: import.meta.env.VITE_ENV,
  SOCKET_URL: import.meta.env.VITE_SOCKET_URL,
  CRDT_URL: import.meta.env.VITE_CRDT_URL,
  API_URL:
    import.meta.env.VITE_ENV === "production"
      ? import.meta.env.VITE_API_URL
      : "http://localhost:3000/v1",
};

export default config;