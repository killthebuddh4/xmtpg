module.exports = {
  App: (logger) => {
    return (message) => logger(message);
  }
};