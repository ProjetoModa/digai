import api from "./api";

const chatbotURL = import.meta.env.VITE_CHATBOT_API;

const ChatbotService = {
  init: async (id: string) => {
    return await api(chatbotURL + "/init", {
      method: "POST",
      body: JSON.stringify({ id: id }),
    });
  },
  navigate: async (id: string, page: string) => {
    return await api(chatbotURL + "/navigate", {
      method: "POST",
      body: JSON.stringify({ id: id, page: page }),
    });
  },

  chat: (id: string) => {},
  like: async (id: string, product: string) => {
    return await api(chatbotURL + "/like", {
      method: "POST",
      body: JSON.stringify({ id: id, product: product }),
    });
  },
  dislike: async (id: string, product: string) => {
    return await api(chatbotURL + "/dislike", {
      method: "POST",
      body: JSON.stringify({ id: id, product: product }),
    });
  },
  finish: () => {},
};

export default ChatbotService;
