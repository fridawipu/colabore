// Optimized GetUser function to retrieve user data from the database
function getUser(userId) {
  // Validate the input to prevent potential security issues like SQL injection
  if (!Number.isInteger(userId)) {
    throw new Error('Invalid user ID');
  }

  // Connect to the database (this should be replaced with your actual DB connection logic)
  const dbConnection = getDatabaseConnection();

  // Prepare the SQL query to fetch the user data
  const query = `SELECT * FROM users WHERE id = ${userId}`;

  // Execute the query and return the user data
  try {
    const user = dbConnection.executeQuery(query);
    return user;
  } catch (error) {
    // Handle any errors that occur during the database operation
    console.error('Error fetching user:', error);
    throw error;
  } finally {
    // Ensure the database connection is closed after the operation
    dbConnection.close();
  }
}

// Helper function to simulate database connection (to be implemented)
function getDatabaseConnection() {
  // Placeholder for database connection logic
  // In a real scenario, this would handle connecting to your database
  return {
    executeQuery: (query) => {
      // Placeholder for query execution logic
      // In a real scenario, this would execute the query against your database
      console.log('Executing query:', query);
      // Return a mock user object for demonstration purposes
      return { id: userId, name: 'John Doe', email: 'john.doe@example.com' };
    },
    close: () => {
      // Placeholder for closing the database connection
      console.log('Database connection closed');
    }
  };
}
