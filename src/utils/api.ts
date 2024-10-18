export const fetchAccessToken = async (url: string, token: string) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `${token}`, // Include token in headers
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return response.json();
  };