const API_URL = process.env.WORDPRESS_API_URL || "";

export interface Service {
  description: string | null;
  price: string;
  title: string;
}

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate", // Запрещает кеширование
    Pragma: "no-cache", // Для поддержки старых браузеров
    Expires: "0", // Истекает немедленно
  };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

//Получаем все посты
export async function getAllService(limit?: number): Promise<Service[]> {
  const response = await fetchAPI(`
    query SinglePost {
        services(first: ${
          limit || 100
        }, where: {orderby: {field: DATE, order: ASC}}) {
            edges {
                node {
                    serviceField {
                        description
                        price
                        title
                    }
                }
            }
        }
    }
  `);

  return response.services.edges.map(
    (element: { node: { serviceField: Service } }) => {
      return element.node.serviceField;
    }
  );
}
