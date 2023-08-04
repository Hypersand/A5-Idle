export async function getTrimData() {
  try {
    const response = await fetch("../src/utils/dummydata/trim.json")
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
