import { API_URL } from "./config";

export async function createCard(deckId: string, text: string) {
    const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "content-type": "application/json",
      },

    });
    return response.json();
}