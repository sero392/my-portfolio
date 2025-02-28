const TOKEN = process.env.API_TOKEN;

export async function GetData(API_URL, IS_AUTH = true) {
  try {
    const headers = {};
    //Token Ekleme Kontrolü
    if (IS_AUTH) headers.Authorization = `Bearer ${TOKEN}`;

    const response = await fetch(API_URL, {
      method: "GET",
      headers: headers,
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "API ERROR!!");
    }

    const data = await response.json();
    return Response.json(data);
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
