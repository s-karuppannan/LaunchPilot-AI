/**
 * Error Middleware
 * Centralized error handling for Express
 */

/**
 * Error handler middleware
 */
const errorMiddleware = (err, req, res, next) => {
  // Log error for debugging
  console.error('Error:', err);
  
  // Determine status code
  const statusCode = err.statusCode || 500;
  
  // Determine error type
  const errorType = err.name || 'ServerError';
  
  // Format error response
  const errorResponse = {
    error: errorType,
    message: err.message || 'An unexpected error occurred',
    statusCode
  };
  
  // Add stack trace in development
  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack;
  }
  
  // Send error response
  res.status(statusCode).json(errorResponse);
};

/**
 * 404 Not Found handler
 */
const notFoundMiddleware = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

module.exports = {
  errorMiddleware,
  notFoundMiddleware
};
