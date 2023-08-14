export async function CustomAPI(path, data = {}) {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}/${path}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
