export default async function request(
  url,
  method = 'GET',
  body = null,
  headers = {},
) {
  try {
    const response = await fetch(url, { method, body, headers });
    if (response.ok === false) {
      const error = await response.json();
      return error;
    }

    try {
      return response.json();
    } catch (err) {
      return response;
    }
  } catch (err) {
    return alert(err.message);
  }
}
