import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      title:
        "USER EXPERIENCE IN CLOTHING FASHION E-COMMERCE - EVALUATION EXPERIMENT",
      consent:
        "By continuing with this survey you confirm that you are at least 18 years of age and that you consent to participate. If you do not consent to participate, please exit this survey or close your browser.",
      start: "Start Experiment",
      cancel: "Cancel",
      part: "Part",
      part_a: "Part A",
      part_b: "Part B",
      part_c: "Part C",
      qst: {
        likert: {
          l1: "Strongly agree",
          l2: "Agree",
          l3: "Neutral",
          l4: "Disagree",
          l5: "Strongly disagree",
        },
      },
      dialog: {
        consent: {
          title: "Consent is required.",
          description: "To continue, please check the consent box",
        },
      },
      home: {
        title1: "What is the research about?",
        p1: "I am André Landim, a Computer Science Master’s student at the Federal University of Campina Grande (UFCG) in collaboration with the Federal University of Alagoas (UFAL) in Brazil. We would like to invite you to participate in a study regarding chatbot and recommender system for fashion e-commerce. This study was approved by the Ethics Committee at UFAL (CAAE 43950621.4.0000.5013).",
        title2: "What will happen to me if I take part?",
        p2: "You are kindly requested to help us evaluate scenarios of Recommender Systems' applications to Fashion E-commerce. For that, we designed an evaluation website in which you try to select a skirt you like and would possibly buy from a fashion e-commerce site in three different scenarios. The website interactive experiment should take you less than 15 minutes to complete (there are 3 parts). Results will be kept anonymous. After the experiment, you will be asked to complete an anonymous questionnaire which should take you another 15 minutes approximately. Thius, altogehter (experiment + questionnaire) you might spend around 39min in this study.",
        title3:
          "What is the “evaluation experiment” via website interaction and what am I supposed to do?",
        p3: 'In the experiment you will find a list of skirts to choose. No personal information will be collected, only your interactions with the website via clicks. Your goal is to find a striped mid-size skirt that you like and would "buy". To simulate your buying action and end the experiment you click on the 🛒 (shopping cart) button. The website interaction will take place in three parts. In Part A recommendations are made to you without the assistance of a chatbot; in Part B, you may use a chatbot after an initial, random set of skirt suggestions; and, in Part C you ask the chatbot to make an initial set of skirt suggestions. This website interaction will help us understand the effectiveness of the chatbot in context.',
        title4: "What information will be collected?",
        p4: "The questions in this survey seek to identify various aspects of the user's experience, including the quality, accuracy, variety, control, and efficiency of the recommendations provided by the platform, as well as the overall trust and experience of the user. We also collect logs of tool usage, which record each user iteration and the timestamp of each action taken. We do not collect any personal information, only user analytics. We do not collect any information, such as email, that may identify you in any way. Some of the survey questions contain textboxes where you will be asked to type in your own answers. Please note that in order for this survey to be anonymous, you should not include in your answers any information from which you, or other people, could be identified.",
        p5: 'Please click on the "Instructions" button below before proceeding. Then, return to this page, check the "Consent Box" and press the "Start Experiment" button. Thank you for your time.',
      },
      inter_ab: {
        title: "END OF PART A",
        p1: "Please go to Part B of the experiment by clicking on the button below. There you will find the same experiment as before, but with a chatbot. Feel free to use it.",
        start: "Start Part B",
      },
      inter_bc: {
        title: "We are almost finished",
        p1: "Part C is rather quick and there will be no more questionnaires. There you will find the same experiment as before, but you must use the chatbot to get recommendations.",
        start: "Start Part C",
      },
      end: {
        title: "Thank You",
        p1: "Thank you for your time. You can contact me at andredantas@copin.ufcg.edu.br if you like to receive a copy of the published results.",
        restart: "Repeat the Experiment for Another Person",
      },
      instructions: {
        title: "Instructions",
        catalog: {
          title: "Catalog",
          p1: "The scope of this experiment is limited by the catalog used. The information in the catalog relates to skirts with the following features only:",
          p2: "The experiment has Parts A, B and C.",
        },
        part_a: {
          title: "Part A",
          p1: '1. After you press the "Start the Experiment" button, you should see a gallery like the one below.',
          p2: '2. You should mark with a heart the skirts that you have an opinion about or leave blank those that you are indiferent. Then you can click on "More Skirts Recommendations" to load more skirts based on your given preferences.',
          p3: "3. Whenever you find a skirt that you like (would buy), click on the 🛒 (shopping cart) button to finalize the current part of the experiment.",
        },
        part_b: {
          title: "Part B",
          p1: "It's similar to Part A, but to the right of the screen you have a chatbot you can interact with. You can ask the chatbot for specific types of skirts. The information that is available for you to ask the chatbot is that in the catalog as provided at the top of this page.",
        },
        part_c: {
          title: "Part C",
          p1: "As Part B but a chatbot waits for your input to present any initial suggestions.",
        },
      },
      colors: {
        title: "Colors",
        black: "Black",
        blue: "Blue",
        brown: "Brown",
        beige: "Beige",
        gray: "Gray",
        green: "Green",
        orange: "Orange",
        pink: "Pink",
        purple: "Purple",
        red: "Red",
        white: "White",
        yellow: "Yellow",
      },
      fabrics: {
        title: "Fabric",
        denim: "Denim",
        knitted: "Knitted",
        laced: "Laced",
        glossy: "Glossy / Leather",
        general: "General Fabric (Cotton, Polyester)",
        velvet: "Velvet",
      },
      patterns: {
        title: "Pattern",
        animal_print: "Animal Print",
        geometric: "Geometric",
        camouflage: "Camouflage",
        checked: "Checked",
        floral: "Floral",
        paisley: "Paisley",
        plain: "Plain",
        polka_dot: "Polka Dot",
        striped: "Striped",
        tie_dyed: "Tie Dyed",
      },
      sizes: {
        title: "Size",
        mini: "Mini",
        midi: "Midi",
        maxi: "Maxi",
      },
      shapes: {
        title: "Shape",
        pleated: "Pleated (Waves or Folds)",
        straight: "Straight",
        asymetric: "Asymetric",
      },
    },
  },
  pt: {
    translation: {
      title:
        "EXPERIÊNCIA DO USUÁRIO EM E-COMMERCE DE MODA - EXPERIMENTO DE AVALIAÇÃO",
      consent:
        "Ao continuar com esta pesquisa, você confirma que tem pelo menos 18 anos de idade e que concorda em participar. Se você não consentir em participar, saia desta pesquisa ou feche seu navegador.",
      start: "Iniciar experimento",
      cancel: "Cancelar",
      part: "Parte",
      part_a: "Parte A",
      part_b: "Parte B",
      part_c: "Parte C",
      qst: {
        likert: {
          l1: "Concordo plenamente",
          l2: "Concordo",
          l3: "Neutro",
          l4: "Discordo",
          l5: "Discordo plenamente",
        },
      },
      dialog: {
        consent: {
          title: "Consentimento requerido.",
          description: "Para continuar, por favor, aceite os termos.",
        },
      },
      home: {
        title1: "Sobre o que é a pesquisa?",
        p1: "Sou André Landim, aluno de Mestrado em Ciência da Computação na Universidade Federal de Campina Grande (UFCG) em colaboração com a Universidade Federal de Alagoas (UFAL) no Brasil. Gostaríamos de convidá-lo a participar de um estudo sobre chatbot e sistema de recomendação para e-commerce de moda. Este estudo foi aprovado pelo Comitê de Ética da UFAL (CAAE 43950621.4.0000.5013).",
        title2: "O que vai acontecer comigo se eu participar?",
        p2: "Pedimos gentilmente que nos ajude a avaliar os cenários de aplicações dos Sistemas de Recomendação para E-commerce de Moda. Para isso, criamos um site de avaliação no qual você tenta selecionar uma saia que você gosta e possivelmente compraria em um e- commerce em três cenários diferentes. O experimento interativo do site deve levar menos de 15 minutos para ser concluído (existem 3 partes). Os resultados serão mantidos anônimos. Após o experimento, você será solicitado a preencher um questionário anônimo que deve levar você mais 15 minutos aproximadamente. Assim, ao todo (experimento + questionário), você pode gastar cerca de 39 minutos neste estudo.",
        title3:
          "O que é o “experimento de avaliação” via interação com o site e o que devo fazer?",
        p3: 'No experimento você encontrará uma lista de saias para escolher. Nenhuma informação pessoal será coletada, apenas suas interações com o site por meio de cliques. Seu objetivo é encontrar uma saia listrada tamanho médio que você goste e que "compraria". Para simular sua ação de compra e finalizar a experiência, clique no botão 🛒 (carrinho de compras). A interação no site ocorrerá em três partes. Na Parte A, as recomendações são feitas a você sem a ajuda de um chatbot; na Parte B , você pode usar um chatbot após um conjunto inicial aleatório de sugestões de saias; e, na Parte C, você pede ao chatbot para fazer um conjunto inicial de sugestões de saias. Essa interação no site nos ajudará a entender a eficácia do chatbot no contexto.',
        title4: "Que informações serão coletadas?",
        p4: "As perguntas desta pesquisa buscam identificar vários aspectos da experiência do usuário, incluindo a qualidade, precisão, variedade, controle e eficiência das recomendações fornecidas pela plataforma, bem como a confiança e experiência geral do usuário. Também coletamos logs de uso da ferramenta, que registram cada iteração do usuário e o registro de data e hora de cada ação realizada. Não coletamos nenhuma informação pessoal, apenas análises do usuário. Não coletamos nenhuma informação, como e-mail, que possa identificá-lo em qualquer forma. Algumas das perguntas da pesquisa contêm caixas de texto onde você será solicitado a digitar suas próprias respostas. Observe que, para que esta pesquisa seja anônima, você não deve incluir em suas respostas nenhuma informação da qual você ou outras pessoas, podem ser identificados.",
        p5: 'Por favor, clique no botão "Instruções" abaixo antes de prosseguir. Em seguida, retorne a esta página, marque a "Caixa de consentimento" e pressione o botão "Iniciar experimento". Obrigado pelo seu tempo.',
      },
      inter_ab: {
        title: "FIM DA PARTE A",
        p1: "Vá para a Parte B do experimento clicando no botão abaixo. Lá você encontrará o mesmo experimento de antes, mas com um chatbot. Sinta-se livre para usá-lo.",
        start: "Iniciar Parte B",
      },
      inter_bc: {
        title: "Estamos quase terminando",
        p1: "A Parte C é bastante rápida e não haverá mais questionários. Lá você encontrará o mesmo experimento de antes, mas deve usar o chatbot para obter recomendações.",
        start: "Iniciar Parte C",
      },
      end: {
        title: "Obrigado",
        p1: "Obrigado pelo seu tempo. Você pode entrar em contato comigo em andredantas@copin.ufcg.edu.br se quiser receber uma cópia dos resultados publicados.",
        restart: "Repetir a Experiência para Outra Pessoa",
      },
      instructions: {
        title: "Instruções",
        catalog: {
          title: "Catálogo",
          p1: "O escopo desta experiência é limitado pelo catálogo usado. A informação do catálogo refere-se apenas a saias com as seguintes características:",
          p2: "O experimento tem as Partes A, B e C.",
        },
        part_a: {
          title: "Parte A",
          p1: '1. Depois de pressionar o botão "Iniciar o Experimento", você deverá ver uma galeria como a abaixo.',
          p2: '2. Você deve marcar com coração as saias sobre as quais você tem opinião ou deixar em branco aquelas que você é indiferente. Em seguida, você pode clicar em "Mais recomendações de saias" para carregar mais saias com base em suas preferências.',
          p3: "3. Sempre que encontrar uma saia que goste (compraria), clique no botão 🛒 (carrinho de compras) para finalizar a parte atual do experimento.",
        },
        part_b: {
          title: "Parte B",
          p1: "É semelhante à Parte A, mas à direita da tela você tem um chatbot com o qual pode interagir. Você pode pedir ao chatbot tipos específicos de saias. A informação que está disponível para você perguntar ao chatbot é a que está no catálogo fornecido no topo desta página.",
        },
        part_c: {
          title: "Parte C",
          p1: "Como Parte B, mas um chatbot aguarda sua entrada para apresentar sugestões iniciais.",
        },
      },
      colors: {
        title: "Cores",
        black: "Preto",
        blue: "Azul",
        brown: "Marrom",
        beige: "Bege",
        gray: "Cinza",
        green: "Verde",
        orange: "Laranja",
        pink: "Rosa",
        purple: "Roxo",
        red: "Vermelho",
        white: "Branco",
        yellow: "Amarelo",
      },
      fabrics: {
        title: "Tecido",
        denim: "Jeans",
        knitted: "Crochet",
        laced: "Renda",
        glossy: "Brilhante (Couro)",
        general: "Tecido em Geral",
        velvet: "Veludo",
      },
      patterns: {
        title: "Estampa",
        animal_print: "Animal",
        geometric: "Geométrico",
        camouflage: "Camuflagem",
        checked: "Xadrez",
        floral: "Floral",
        paisley: "Paisley",
        plain: "Simples",
        polka_dot: "Bolinhas",
        striped: "Listrado",
        tie_dyed: "Tingida",
      },
      sizes: {
        title: "Tamanho",
        mini: "Mini",
        midi: "Midi",
        maxi: "Maxi",
      },
      shapes: {
        title: "Formato",
        pleated: "Plissada (Dobras ou Ondas)",
        straight: "Reta",
        asymetric: "Assimétrica",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
