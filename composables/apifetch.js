export const apiFetch = (request, opts) => {
  const config = useRuntimeConfig();

  return useFetch(request, { baseURL: 'http://grupo-drews.test/api/' , ...opts });
};
