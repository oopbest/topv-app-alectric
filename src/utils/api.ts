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

  export const refreshAccessToken = async () => {
    const token = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/integration/admin/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: process.env.API_USERNAME, 
        password: process.env.API_PASSWORD
      }),
    });
    return token
  }