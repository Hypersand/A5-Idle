export async function getAPI(path, data = {}) {
  try {
    const queryParams = new URLSearchParams(data).toString();
    console.log(queryParams);
    const response = await fetch(`/api/${path}${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

export async function postAPI(path, data = {}) {
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${path}`, {
      method: "POST",
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
