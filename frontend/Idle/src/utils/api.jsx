import { BASE_URL } from "./constants";

export async function CustomAPI(path) {
  try {
    const response = await fetch(`${BASE_URL}/${path}`)
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
