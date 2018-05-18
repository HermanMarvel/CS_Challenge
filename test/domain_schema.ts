export function getSchema() {

    return {
        title: "domain schema v1",
        type: "object",
        required: ["web_pages",
                   "name",
                   "alpha_two_code",
                   "state-province",
                   "domains",
                   "country"],
        properties: {
          web_pages: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
              type: "string"
            }
          },
          name: {
            type: "string"
          },
          aplha_two_code: {
            type: "string",
            minimum: 5
          },
          "state-province": {
            type: ["string", "null"]
          },
          domains: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
              type: "string"
            }
          },
          country: {
            type: "string"
          }

        }
      };
}