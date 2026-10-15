
const BASE_URL = "https://open.er-api.com/v6/latest";

export async function exchangeRateApi(fromCurrency) {
  try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro ao buscar a cotação:", error);
    throw error;
  }
}

