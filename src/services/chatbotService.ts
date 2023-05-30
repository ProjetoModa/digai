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
  entropy: () => {},
  like: () => {},
  dislike: () => {},
  finish: () => {},
};

export default ChatbotService;
