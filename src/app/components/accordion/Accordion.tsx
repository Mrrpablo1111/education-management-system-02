'use client'
import React from 'react'
import { Body, H1 } from "./formatting";
import QA from './QA';
const dataQA = [
  {
      question: "How can I change my study plan e.g. defer study, change programme or intake?",
      answer: "Should review your institution's academic policies and then contact the relevant department (e.g., admissions, registrar) for guidance. Understand the available options and gather any necessary documentation. Submit a formal request according to the prescribed procedure and await confirmation. Stay in touch with the department for updates and to address any concerns.",
  },
  {
      question: "I want to study at your University. What courses do you offer?",
      answer: "",
  },
  {
      question: "How long is the validity of my registration fee payment?",
      answer: "",
  },
  {
      question: "What do you like about Switzerland?",
      answer: "",
  },
]
const Accordion = () => {
  return (
    <Body>
    <div className='text-red-800'>
        <H1>Frequently Asked Question</H1></div>
    {dataQA.map((data, i) =>
        <div key={i}>
            <QA
                question={data.question}
                answer={data.answer}
            />
        </div>
    )}
</Body>
  )
}

export default Accordion;