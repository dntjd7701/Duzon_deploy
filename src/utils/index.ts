type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export const callApi = async (url: string, param: object, method: HttpMethod = 'GET') => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });

    const result = await response.json();
    console.debug('result:', result);

    if (!response.ok || result.resultCode < 0) {
      throw new Error(`Failed to fetch: (${result.resultCode}) ${result.resultMsg.toString() || ''}`);
    }
    return result;
  } catch (error) {
    console.error('callApi:', error);
  }
};
