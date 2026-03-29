#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(process.cwd(), "CyberSecurity_Roadmap_Test.md");
const outputPath = path.resolve(process.cwd(), "questions.json");

const source = fs.readFileSync(inputPath, "utf8").replace(/\r/g, "");

const sections = [
  { difficulty: "Kolay", regex: /## BÖLÜM I[\s\S]*?(?=## BÖLÜM II|$)/i },
  { difficulty: "Orta", regex: /## BÖLÜM II[\s\S]*?(?=## BÖLÜM III|$)/i },
  { difficulty: "Zor", regex: /## BÖLÜM III[\s\S]*?(?=## CEVAP ANAHTARI|$)/i }
];

const questionRegex = /\*\*(\d+)\.\*\*\s*([\s\S]*?)\nA\)\s*(.*?)\nB\)\s*(.*?)\nC\)\s*(.*?)\nD\)\s*(.*?)\n+\*\*Doğru Cevap:\s*([ABCD])\*\*\s*\n\*\*Açıklama:\*\*\s*([\s\S]*?)(?=\n---\n|\n\*\*\d+\.\*\*|$)/g;

function decodeHtmlEntities(value) {
  const entityMap = {
    "&quot;": '"',
    "&#039;": "'",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">"
  };

  let current = value || "";
  for (let i = 0; i < 3; i += 1) {
    const decoded = current.replace(/&quot;|&#039;|&amp;|&lt;|&gt;/g, (m) => entityMap[m] || m);
    if (decoded === current) {
      break;
    }
    current = decoded;
  }
  return current;
}

function cleanChunk(text) {
  const normalized = text
    .split("\n")
    .map((line) => line.replace(/\s+$/g, ""))
    .join("\n")
    .trim();

  return decodeHtmlEntities(normalized);
}

function parseQuestions(markdown) {
  const questions = [];

  sections.forEach((section) => {
    const sectionMatch = markdown.match(section.regex);
    if (!sectionMatch) {
      return;
    }

    let match;
    while ((match = questionRegex.exec(sectionMatch[0])) !== null) {
      questions.push({
        id: Number(match[1]),
        question: cleanChunk(match[2]),
        options: {
          A: cleanChunk(match[3]),
          B: cleanChunk(match[4]),
          C: cleanChunk(match[5]),
          D: cleanChunk(match[6])
        },
        correct: match[7],
        explanation: cleanChunk(match[8]),
        difficulty: section.difficulty
      });
    }
  });

  questions.sort((a, b) => a.id - b.id);
  return questions;
}

const questions = parseQuestions(source);

if (questions.length !== 120) {
  console.error(`Beklenen 120 soru yerine ${questions.length} soru bulundu.`);
  process.exit(1);
}

fs.writeFileSync(outputPath, `${JSON.stringify(questions, null, 2)}\n`, "utf8");
console.log(`questions.json yazıldı: ${questions.length} soru`);
