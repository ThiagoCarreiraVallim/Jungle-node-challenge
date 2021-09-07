const error = {
  notFoundEmail: { code: 400, message: 'Email not found' },
  invalidPassword: { code: 400, message: 'Invalid password' },
  invalidToken: { code: 400, message: 'Invalid token' },
  forbidden: { code: 403, message: 'Forbidden' },
  authorNotFound: { code: 404, message: 'Author not found' },
}

module.exports = error;
