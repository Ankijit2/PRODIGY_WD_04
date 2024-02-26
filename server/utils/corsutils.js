const corsOptions = {
    // origin: "http://localhost:5173",
    origin: (origin, callback) => {
      // Check if the origin is allowed
      const allowedOrigins = [
        "http://localhost:5173",
        "https://ankijitportfolio.vercel.app",
        "https://portfolio-eihge3vve-ankijit-roys-projects.vercel.app",
        "https://portfolio-ankijit-roys-projects.vercel.app",
        
        
      ];
      const isAllowed = allowedOrigins.includes(origin);
      callback(null, isAllowed ? origin : false);
    },
    optionsSuccessStatus: 200,
    credentials: true,
  };

  export default corsOptions