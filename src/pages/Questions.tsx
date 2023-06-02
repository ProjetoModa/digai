import {
  Alert,
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { createRef, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatbotService from "../services/chatbotService";
import Likert from "../components/forms/Likert";
import Text from "../components/forms/Text";
import Adjectives from "../components/forms/Adjectives";

export type QuestionItem = {
  start: string;
  end: string;
};

export type Question = {
  id: string;
  type: string;
  title: string;
  required?: boolean;
  items?: QuestionItem[];
};

export type Section = {
  title: string;
  questions: Question[];
};

export default function Questions() {
  const uuid = useRef<string | null>(null);
  const topAnchor = createRef<HTMLDivElement>();
  const [data, setData] = useState<any>({});
  const [err, setErr] = useState<string>("");
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const sections: Section[] = [
    {
      title: "Concerning the quality or accuracy of the recommendations:",
      questions: [
        {
          id: "q1",
          type: "likert",
          title: "Q1: The recommender provided good recommendations.",
          required: true,
        },
        {
          id: "q1c",
          type: "text",
          title:
            "Q1: You may skip this. But any comments explaining your marks for Part A or B above would help us much.",
        },
        {
          id: "q2",
          type: "likert",
          title: "Q2: I liked the recommendations provided by the system.",
          required: true,
        },
        {
          id: "q2c",
          type: "text",
          title: "Q2: Comments?",
        },
        {
          id: "q3",
          type: "likert",
          title: "Q3: The recommended skirts fitted my preference.",
          required: true,
        },
        {
          id: "q3c",
          type: "text",
          title: "Q3: Comments?",
        },
      ],
    },
    {
      title: "Concerning the diversity or variety of the recommendations:",
      questions: [
        {
          id: "d1",
          type: "likert",
          title: "D1: The recommender helped me discover new skirts.",
          required: true,
        },
        {
          id: "d1c",
          type: "text",
          title: "D1: Comments?",
        },
        {
          id: "d2",
          type: "likert",
          title: "D2: The skirts that were recommended to me are diverse.",
          required: true,
        },
        {
          id: "d2c",
          type: "text",
          title: "D2: Comments?",
        },
        {
          id: "d3",
          type: "likert",
          title:
            "D3: The list of recommendations included skirts of many different types.",
          required: true,
        },
        {
          id: "d3c",
          type: "text",
          title: "D3: Comments?",
        },
      ],
    },
    {
      title:
        "Concerning the control you had on the flow of the recommendations:",
      questions: [
        {
          id: "c1",
          type: "likert",
          title: "C1: I became familiar with the system very quickly.",
          required: true,
        },
        {
          id: "c1c",
          type: "text",
          title: "C1: Comments?",
        },
        {
          id: "c2",
          type: "likert",
          title:
            "C2: The layout of the recommendations on the screen was adequate",
          required: true,
        },
        {
          id: "c2c",
          type: "text",
          title: "C2: Comments?",
        },
        {
          id: "c3",
          type: "likert",
          title:
            "C3: The recommender allowed me to inform my preference easily ",
          required: true,
        },
        {
          id: "c3c",
          type: "text",
          title: "C3: Comments?",
        },
        {
          id: "c4",
          type: "likert",
          title:
            "C4: The recommender helped me decide on subsequent options faster than I would looking at a catalog of skirts",
          required: true,
        },
        {
          id: "c4c",
          type: "text",
          title: "C4: Comments?",
        },
      ],
    },
    {
      title: "Concerning the effectiveness of the recommendations:",
      questions: [
        {
          id: "e1",
          type: "likert",
          title: "E1: Using the system is a pleasant experience.",
          required: true,
        },
        {
          id: "e1c",
          type: "text",
          title: "E1: Comments?",
        },
        {
          id: "e2",
          type: "likert",
          title: "E2: I made better choices with the recommender.",
          required: true,
        },
        {
          id: "e2c",
          type: "text",
          title: "E2: Comments?",
        },
        {
          id: "e3",
          type: "likert",
          title: "E3: I found better items using the recommender.",
          required: true,
        },
        {
          id: "e3c",
          type: "text",
          title: "E3: Comments?",
        },
      ],
    },
    {
      title: "Concerning the trust you had in the system:",
      questions: [
        {
          id: "t1",
          type: "likert",
          title: "T1: The recommendations the system made were convincing.",
          required: true,
        },
        {
          id: "t1c",
          type: "text",
          title: "T1: Comments?",
        },
        {
          id: "t2",
          type: "likert",
          title:
            "T2:  The recommender made me more confident about my final selection/decision",
          required: true,
        },
        {
          id: "t2c",
          type: "text",
          title: "T2: Comments?",
        },
        {
          id: "t3",
          type: "likert",
          title:
            "T3: I am confident I will like other fashion items the system recommends me in the future",
          required: true,
        },
        {
          id: "t3c",
          type: "text",
          title: "T3: Comments?",
        },
        {
          id: "t4",
          type: "likert",
          title: "T4: The recommender can be trusted.",
          required: true,
        },
        {
          id: "t4c",
          type: "text",
          title: "T4: Comments?",
        },
      ],
    },
    {
      title: "Concerning your overall satisfaction with the system:",
      questions: [
        {
          id: "s1",
          type: "likert",
          title: "S1: I will use this recommender again.",
          required: true,
        },
        {
          id: "s1c",
          type: "text",
          title: "S1: Comments?",
        },
        {
          id: "s2",
          type: "likert",
          title:
            "S2: I am likely to recommend my friends use fashion e-commerce sites with more efficient recommendation tools.",
          required: true,
        },
        {
          id: "s2c",
          type: "text",
          title: "S2: Comments?",
        },
        {
          id: "s3",
          type: "likert",
          title: "S3: Overall, I am satisfied with the recommender.",
          required: true,
        },
        {
          id: "s3c",
          type: "text",
          title: "S3: Comments?",
        },
        {
          id: "s4",
          type: "likert",
          title: "S4: The recommender helped me find a skirt I really liked.",
          required: true,
        },
        {
          id: "s4c",
          type: "text",
          title: "S4: Comments?",
        },
      ],
    },
    {
      title: "Concerning your experience with the system:",
      questions: [
        {
          id: "a1",
          type: "adjectives",
          title:
            "Please enter what you consider the most appropriate description for the application without the chatbot (Part A).",
          required: true,
          items: [
            { start: "Boring", end: "Motivating" },
            { start: "Practical", end: "Pleasant" },
            { start: "Misleading", end: "Trustworthy" },
            { start: "Isolating", end: "Sociable" },
            { start: "Machinelike", end: "Humanlike" },
            { start: "Artificial", end: "Lifelike" },
            { start: "Fake", end: "Natural" },
          ],
        },
        {
          id: "a2",
          type: "adjectives",
          title:
            "Please enter what you consider the most appropriate description for the application with the chatbot (Part B).",
          required: true,
          items: [
            { start: "Boring", end: "Motivating" },
            { start: "Practical", end: "Pleasant" },
            { start: "Misleading", end: "Trustworthy" },
            { start: "Isolating", end: "Sociable" },
            { start: "Machinelike", end: "Humanlike" },
            { start: "Artificial", end: "Lifelike" },
            { start: "Fake", end: "Natural" },
          ],
        },
      ],
    },
  ];

  const isEmpty = (value: any): boolean => {
    return value === "" || value === 0 || value === null || value === undefined;
  };

  const isInvalid = (question: Question) => {
    switch (question.type) {
      case "likert":
        return (
          question.required === true &&
          (isEmpty(data?.[question.id]?.a) || isEmpty(data?.[question.id]?.b))
        );
      case "text":
        return question.required === true && isEmpty(data?.[question.id]);
      case "adjectives":
        return (
          question.required === true &&
          (data?.[question.id]?.length === 0 ||
            data?.[question.id]?.length !== question.items!.length ||
            data?.[question.id]?.some((itemValue: string) =>
              isEmpty(itemValue)
            ))
        );
    }
    return true;
  };

  const handleNext = async () => {
    const invalid = sections[activeStep].questions.some((question) =>
      isInvalid(question)
    );
    if (invalid) {
      setErr("Some required questions are invalid.");
      return;
    }
    if (activeStep === sections.length - 1) {
      await ChatbotService.questionnaire(uuid.current!, data, true);
      const session = await ChatbotService.navigate(uuid.current!, "/part-c");
      localStorage.setItem("state", session.state);
      navigate("/part-c");
    } else {
      await ChatbotService.questionnaire(uuid.current!, data, false);
      setActiveStep((lastStap) => lastStap + 1);
      setErr((_) => "");
      topAnchor.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (id: any, value: any) => {
    setData((lastData: any) => {
      const newData = { ...lastData, [id]: value };
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;
    });
  };

  useEffect(() => {
    uuid.current = localStorage.getItem("uuid");
    if (!uuid.current) {
      navigate("/");
    }
    const lastData = localStorage.getItem("data");
    if (lastData) {
      setData((_: any) => JSON.parse(lastData));
    }
  }, []);

  return (
    <Box ref={topAnchor} component="main">
      <Box component="header" className="header" sx={{ textAlign: "center" }}>
        <Container sx={{ padding: 4 }}>
          <Typography variant="h5">Questionnaire</Typography>
        </Container>
      </Box>
      <Container>
        <Box sx={{ margin: 4 }}>
          <Stepper activeStep={activeStep}>
            {sections.map((_, index) => (
              <Step key={index} completed={activeStep > index}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ margin: 4 }}>
          <Typography sx={{ color: "#000000" }} variant="h4">
            {sections[activeStep].title}
          </Typography>
          {sections[activeStep].questions.map((question, index) => {
            switch (question.type) {
              case "likert":
                return (
                  <Likert
                    key={index}
                    id={question.id}
                    title={question.title}
                    required={question.required}
                    value={data[question.id]}
                    onChange={handleChange}
                    invalid={
                      err !== "" &&
                      question.required === true &&
                      isInvalid(question)
                    }
                  />
                );
              case "text":
                return (
                  <Text
                    key={index}
                    id={question.id}
                    title={question.title}
                    required={question.required}
                    value={data[question.id]}
                    onChange={handleChange}
                    invalid={
                      err !== "" &&
                      question.required === true &&
                      isInvalid(question)
                    }
                  />
                );
              case "adjectives":
                return (
                  <Adjectives
                    key={index}
                    id={question.id}
                    title={question.title}
                    items={question.items!}
                    required={question.required}
                    value={data[question.id]}
                    onChange={handleChange}
                    invalid={
                      err !== "" &&
                      question.required === true &&
                      isInvalid(question)
                    }
                  />
                );
              default:
                console.log(`${question.type} not implemented`);
            }
          })}
        </Box>
        <Box sx={{ textAlign: "center", margin: 2 }}>
          {err && (
            <Alert sx={{ margin: 2 }} severity="error">
              {err}
            </Alert>
          )}
          <Button variant="contained" onClick={handleNext}>
            {activeStep === sections.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
