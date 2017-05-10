/*
  * An API Helper Class for fetching API data from NASA
*/

async function getJson(url){
  try {
    let response = await fetch(url);
    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function getApodJson(){
  try {
    let apodJsonResponse = await getJson('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return apodJsonResponse;
  } catch (error) {
    console.error(error);
  }
}

export default getApodJson;