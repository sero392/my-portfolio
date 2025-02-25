const TOKEN =
  "7ab5928fd9d43c774e9205dd0875ea60836fd73384f6e631a8038e5899a6b5b4c4c53fc07d9fe21c9212d8f36a5ca0c66a1c6ccd2f69410694879e264eeb582a54dd3bfbd2475f405fc902bfde2f816038928426df3eed510513ef49f2c4d945be4a30b98e3c7ff1468bca57c490137fc5389212fdcedb17edd028a8ab931203";

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
