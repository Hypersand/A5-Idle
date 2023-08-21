export async function getWithoutQueryAPI(path, data = {}) {
  try {
    const queryParams = new URLSearchParams(data).toString();
    console.log(queryParams);
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

export async function optionPostAPI(path, data) {
  let sendData = [];
  data.map((item) => {
    sendData.push({ functionId: item });
  });
  try {
    const response = await fetch(`${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
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

export async function submitPostAPI(path, data) {
  try {
    const response = await fetch(`${path}`, {
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
    return error;
  }
}
