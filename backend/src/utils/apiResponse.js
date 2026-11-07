/**
 * Standardized API Response Utilities per PRD Section 9:
 * Standard response envelope format:
 * {
 *   "success": Boolean,
 *   "data": Object | Array | null,
 *   "message": String,
 *   "errors": Array | Object | null
 * }
 */

export const sendSuccess = (res, statusCode = 200, message = 'Success', data = {}) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    errors: null,
  });
};

export const sendError = (res, statusCode = 500, message = 'Internal Server Error', errors = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
    errors,
  });
};

export default {
  sendSuccess,
  sendError,
};

