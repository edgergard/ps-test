export const compareQuery = (query: string, string: string) => {
  const preparedQuery = query.toLowerCase().trim();
  const preparedString = string.toLowerCase().trim();

  return preparedString.includes(preparedQuery);
};