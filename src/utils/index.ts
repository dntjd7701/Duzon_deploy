type callApiParameter = {};
type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';
type callApiResultType = {
  resultCode: number;
  resultData: Array<any>;
  resultMsg: string;
};
type callApiType = (url: string, param?: callApiParameter, method?: HttpMethod) => Promise<callApiResultType>;

export const callApi: callApiType = async (url, param, method = 'GET') => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(param),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const result: callApiResultType = await response.json();
    return result;
  } catch (error) {
    console.error('callApi:', error);
    throw error;
  }
};
