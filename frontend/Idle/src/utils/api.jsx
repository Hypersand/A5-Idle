export async function getWithoutQueryAPI(path, data = {}) {
  try {
    const queryParams = new URLSearchParams(data).toString();
    const response = await fetch(`${path}${queryParams}`, {
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
    return { error };
  }
}

export async function getWithQueryAPI(path, data = {}) {
  try {
    const queryParams = new URLSearchParams(data).toString();
    const response = await fetch(`${path}?${queryParams}`, {
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
    return error;
  }
}
