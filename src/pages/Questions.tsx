import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ClothItem from "../components/ClothItem";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecommenderService from "../services/recommenderService";
import ChatbotService from "../services/chatbotService";
import Likert from "../components/forms/Likert";
import Text from "../components/forms/Text";

export default function Questions() {
  let uuid = useRef<string | null>(null);
  const navigate = useNavigate();
  const sections = [
    {
      title: "Concerning the quality or accuracy of the recommendations:",
      questions: [
        {
          type: "likert",
          title: "Q1: The recommender provided good recommendations.",
        },
        {
          type: "text",
          title:
            "Q1: You may skip this. But any comments explaining your marks for Part A or B above would help us much.",
        },
        {
          type: "likert",
          title: "Q2: I liked the recommendations provided by the system.",
        },
        { type: "text", title: "Q2: Comments?" },
        {
          type: "likert",
          title: "Q3: The recommended skirts fitted my preference.",
        },
        { type: "text", title: "Q3: Comments?" },
      ],
    },
    {
      title: "Concerning the diversity or variety of the recommendations:",
      questions: [
        {
          type: "likert",
          title: "D1: The recommender helped me discover new skirts.",
        },
        { type: "text", title: "D1: Comments?" },
        {
          type: "likert",
          title: "D2: The skirts that were recommended to me are diverse.",
        },
        { type: "text", title: "D2: Comments?" },
        {
          type: "likert",
          title:
            "D3: The list of recommendations included skirts of many different types.",
        },
        { type: "text", title: "D3: Comments?" },
      ],
    },
    {
      title:
        "Concerning the control you had on the flow of the recommendations:",
      questions: [
        {
          type: "likert",
          title: "C1: I became familiar with the system very quickly.",
        },
        { type: "text", title: "C1: Comments?" },
        {
          type: "likert",
          title:
            "C2: The layout of the recommendations on the screen was adequate",
        },
        { type: "text", title: "C2: Comments?" },
        {
          type: "likert",
          title:
            "C3: The recommender allowed me to inform my preference easily ",
        },
        { type: "text", title: "C3: Comments?" },
        {
          type: "likert",
          title:
            "C4: The recommender helped me decide on subsequent options faster than I would looking at a catalog of skirts",
        },
        { type: "text", title: "C4: Comments?" },
      ],
    },
    {
      title: "Concerning the effectiveness of the recommendations:",
      questions: [
        {
          type: "likert",
          title: "E1: Using the system is a pleasant experience.",
        },
        { type: "text", title: "E1: Comments?" },
        {
          type: "likert",
          title: "E2: I made better choices with the recommender.",
        },
        { type: "text", title: "E2: Comments?" },
        {
          type: "likert",
          title: "E3: I found better items using the recommender.",
        },
        { type: "text", title: "E3: Comments?" },
      ],
    },
    {
      title: "Concerning the trust you had in the system:",
      questions: [
        {
          type: "likert",
          title: "T1: The recommendations the system made were convincing.",
        },
        { type: "text", title: "T1: Comments?" },
        {
          type: "likert",
          title:
            "T2:  The recommender made me more confident about my final selection/decision",
        },
        { type: "text", title: "T2: Comments?" },
        {
          type: "likert",
          title:
            "T3: I am confident I will like other fashion items the system recommends me in the future",
        },
        { type: "text", title: "T3: Comments?" },
        { type: "likert", title: "T4: The recommender can be trusted." },
        { type: "text", title: "T4: Comments?" },
      ],
    },
    {
      title: "Concerning your overall satisfaction with the system:",
      questions: [
        { type: "likert", title: "S1: I will use this recommender again." },
        { type: "text", title: "S1: Comments?" },
        {
          type: "likert",
          title:
            "S2: I am likely to recommend my friends use fashion e-commerce sites with more efficient recommendation tools.",
        },
        { type: "text", title: "S2: Comments?" },
        {
          type: "likert",
          title: "S3: Overall, I am satisfied with the recommender.",
        },
        { type: "text", title: "S3: Comments?" },
        {
          type: "likert",
          title: "S4: The recommender helped me find a skirt I really liked.",
        },
        { type: "text", title: "S4: Comments?" },
      ],
    },
    {
      title: "Concerning your experience with the system:",
      questions: [
        {
          type: "adjectives",
          title:
            "Please enter what you consider the most appropriate description for the application without the chatbot (Part A).",
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
          type: "adjectives",
          title:
            "Please enter what you consider the most appropriate description for the application with the chatbot (Part B).",
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

  const submit = () => {};

  useEffect(() => {
    uuid.current = localStorage.getItem("uuid");
    if (!uuid.current) {
      navigate("/");
    }
  }, []);

  return (
    <Box component="main">
      <Box component="header" className="header" sx={{ textAlign: "center" }}>
        <Container sx={{ padding: 4 }}>
          <Typography variant="h5">Questionnaire</Typography>
        </Container>
      </Box>
      <Container>
        {sections.map((section, index)=>(
          <Box key={index} sx={{margin: 4}}>
            <Typography sx={{color: "#000000"}} variant="h4">{section.title}</Typography>
            {section.questions.map((question, index)=>{
              switch(question.type){
                case "likert":
                  return <Likert key={index} title={question.title} />
                case "text":
                  return <Text key={index} title={question.title} />
                default:
                  console.log(`${question.type} not implemented`)
              }
              })}
          </Box>
        ))}
        <Box sx={{ textAlign: "center", margin: 2 }}>
          <Button variant="contained" onClick={submit}>
            Send Questionnaire
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
