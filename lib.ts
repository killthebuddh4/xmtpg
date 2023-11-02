export default (logger: (m: string) => void) => (message: string) =>
  logger(message);
