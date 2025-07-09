export const getData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    const Data = await response.json();
    return Data;
  } catch (err) {
    console.log("Geting data failed, please try again. the error message are:", err)
  }
}



