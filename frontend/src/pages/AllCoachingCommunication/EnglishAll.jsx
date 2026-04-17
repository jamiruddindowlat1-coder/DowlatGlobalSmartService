import React, { useState } from 'react';
import ItemPanel from '../../components/common/ItemPanel/ItemPanel';

const COLOR = '#1565c0';
const ICON = '🇬🇧';

const subCategories = [

  // ─────────────────────────────────────────────
  //  SSC — GRAMMAR (Part by Part)
  // ─────────────────────────────────────────────
  {
    name: 'SSC | Parts of Speech',
    items: [
      { name: 'Parts of Speech - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/parts-of-speech/' },
      { name: 'Noun - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Noun+Bangla+lecture' },
      { name: 'Pronoun - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Pronoun+Bangla+lecture' },
      { name: 'Adjective - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Adjective+Bangla+lecture' },
      { name: 'Verb - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Verb+Bangla+lecture' },
      { name: 'Adverb - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Adverb+Bangla+lecture' },
      { name: 'Preposition - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Preposition+Bangla+lecture' },
      { name: 'Conjunction - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Conjunction+Bangla+lecture' },
      { name: 'Parts of Speech - Shikho', web: 'https://shikho.com/ssc/english/grammar' },
    ],
  },

  {
    name: 'SSC | Tense',
    items: [
      { name: 'Tense (Full) - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/tense/' },
      { name: 'Present Tense - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Present+Tense+Bangla' },
      { name: 'Past Tense - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Past+Tense+Bangla' },
      { name: 'Future Tense - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Future+Tense+Bangla' },
      { name: 'Tense - Shikho', web: 'https://shikho.com/ssc/english/tense' },
      { name: 'Right Form of Verbs (Tense based) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Right+Form+of+Verbs+Bangla' },
    ],
  },

  {
    name: 'SSC | Voice Change',
    items: [
      { name: 'Voice Change - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/voice-change/' },
      { name: 'Active to Passive Voice - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Voice+Change+Active+Passive+Bangla' },
      { name: 'Voice - Shikho', web: 'https://shikho.com/ssc/english/voice' },
      { name: 'Voice Change Tricks - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Voice+Change+tricks+Bangladesh' },
    ],
  },

  {
    name: 'SSC | Narration',
    items: [
      { name: 'Narration - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/narration/' },
      { name: 'Direct & Indirect Speech - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Narration+Direct+Indirect+Bangla' },
      { name: 'Narration - Shikho', web: 'https://shikho.com/ssc/english/narration' },
      { name: 'Narration Shortcuts - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Narration+shortcuts+Bangladesh' },
    ],
  },

  {
    name: 'SSC | Transformation of Sentences',
    items: [
      { name: 'Transformation - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/transformation/' },
      { name: 'Sentence Transformation - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Transformation+of+Sentences+Bangla' },
      { name: 'Simple Complex Compound - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Simple+Complex+Compound+Sentence+Bangla' },
      { name: 'Transformation - Shikho', web: 'https://shikho.com/ssc/english/transformation' },
    ],
  },

  {
    name: 'SSC | Right Form of Verbs',
    items: [
      { name: 'Right Form of Verbs - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/right-form-of-verbs/' },
      { name: 'Right Form of Verbs - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Right+Form+of+Verbs+full+Bangla' },
      { name: 'Right Form of Verbs - Shikho', web: 'https://shikho.com/ssc/english/right-form' },
      { name: 'Right Form Practice - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+Right+Form+of+Verbs+practice+Bangladesh' },
    ],
  },

  {
    name: 'SSC | Articles',
    items: [
      { name: 'Articles - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/articles/' },
      { name: 'Use of Articles (a/an/the) - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Articles+a+an+the+Bangla' },
      { name: 'Articles - Shikho', web: 'https://shikho.com/ssc/english/articles' },
    ],
  },

  {
    name: 'SSC | Prepositions',
    items: [
      { name: 'Prepositions - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/prepositions/' },
      { name: 'Prepositions Full - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Prepositions+full+Bangla' },
      { name: 'Prepositions - Shikho', web: 'https://shikho.com/ssc/english/prepositions' },
    ],
  },

  {
    name: 'SSC | Sentence Connectors',
    items: [
      { name: 'Sentence Connectors - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/sentence-connectors/' },
      { name: 'Sentence Connectors/Linkers - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Sentence+Connectors+Bangla' },
      { name: 'Sentence Connectors - Shikho', web: 'https://shikho.com/ssc/english/connectors' },
    ],
  },

  {
    name: 'SSC | Completing Sentences',
    items: [
      { name: 'Completing Sentences - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/completing-sentences/' },
      { name: 'Completing Sentences - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Completing+Sentences+Bangla' },
      { name: 'Completing Sentences - Shikho', web: 'https://shikho.com/ssc/english/completing-sentences' },
    ],
  },

  {
    name: 'SSC | Suffix & Prefix',
    items: [
      { name: 'Suffix & Prefix - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/suffix-prefix/' },
      { name: 'Suffix & Prefix - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Suffix+Prefix+Bangla' },
      { name: 'Suffix & Prefix - Shikho', web: 'https://shikho.com/ssc/english/suffix-prefix' },
    ],
  },

  {
    name: 'SSC | Tag Questions',
    items: [
      { name: 'Tag Questions - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/tag-questions/' },
      { name: 'Tag Questions - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Tag+Questions+Bangla' },
      { name: 'Tag Questions - Shikho', web: 'https://shikho.com/ssc/english/tag-questions' },
    ],
  },

  {
    name: 'SSC | Punctuation & Capitalization',
    items: [
      { name: 'Punctuation - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/punctuation/' },
      { name: 'Punctuation & Capitalization - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Punctuation+Capitalization+Bangla' },
      { name: 'Punctuation - Shikho', web: 'https://shikho.com/ssc/english/punctuation' },
    ],
  },

  // ─────────────────────────────────────────────
  //  SSC — WRITING (Part by Part)
  // ─────────────────────────────────────────────
  {
    name: 'SSC | Paragraph Writing',
    items: [
      { name: 'Paragraph Writing - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/paragraph/' },
      { name: 'Paragraph Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Paragraph+Writing+Bangla' },
      { name: 'Paragraph Writing - Shikho', web: 'https://shikho.com/ssc/english/paragraph' },
      { name: 'Important Paragraphs - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+important+paragraphs+Bangladesh' },
    ],
  },

  {
    name: 'SSC | Letter & Email Writing',
    items: [
      { name: 'Letter Writing - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/letter-writing/' },
      { name: 'Formal Letter - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Formal+Letter+Writing+Bangla' },
      { name: 'Informal Letter - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Informal+Letter+Bangla' },
      { name: 'Email Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Email+Writing+Bangla' },
      { name: 'Letter Writing - Shikho', web: 'https://shikho.com/ssc/english/letter' },
    ],
  },

  {
    name: 'SSC | Composition / Essay',
    items: [
      { name: 'Essay Writing - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/essay/' },
      { name: 'Composition Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Composition+Essay+Writing+Bangla' },
      { name: 'Important Essays - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+important+essays+Bangladesh+English' },
      { name: 'Essay - Shikho', web: 'https://shikho.com/ssc/english/essay' },
    ],
  },

  {
    name: 'SSC | Dialogue Writing',
    items: [
      { name: 'Dialogue Writing - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/dialogue/' },
      { name: 'Dialogue Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Dialogue+Writing+Bangla' },
      { name: 'Dialogue Writing - Shikho', web: 'https://shikho.com/ssc/english/dialogue' },
    ],
  },

  {
    name: 'SSC | Summary Writing',
    items: [
      { name: 'Summary Writing - 10 Minute School', web: 'https://10minuteschool.com/ssc/english/summary/' },
      { name: 'Summary Writing - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Summary+Writing+Bangla' },
      { name: 'Summary Writing - Shikho', web: 'https://shikho.com/ssc/english/summary' },
    ],
  },

  // ─────────────────────────────────────────────
  //  SSC — 1ST PAPER (Chapter Wise)
  // ─────────────────────────────────────────────
  {
    name: 'SSC | ১ম পত্র - Unit 1 (Travel)',
    items: [
      { name: 'Unit 1: Travel - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-1/' },
      { name: 'Unit 1 Travel Reading - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+1+Travel+Bangla' },
      { name: 'Reading Comprehension Tips - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+Reading+Comprehension+tips+Bangla' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 2 (Food & Nutrition)',
    items: [
      { name: 'Unit 2: Food - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-2/' },
      { name: 'Unit 2 Food & Nutrition - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+2+Food+Bangla' },
      { name: 'Unit 2 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 3 (Health & Hygiene)',
    items: [
      { name: 'Unit 3: Health - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-3/' },
      { name: 'Unit 3 Health & Hygiene - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+3+Health+Bangla' },
      { name: 'Unit 3 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 4 (Education)',
    items: [
      { name: 'Unit 4: Education - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-4/' },
      { name: 'Unit 4 Education - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+4+Education+Bangla' },
      { name: 'Unit 4 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 5 (Science & Technology)',
    items: [
      { name: 'Unit 5: Science & Technology - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-5/' },
      { name: 'Unit 5 Science - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+5+Science+Technology+Bangla' },
      { name: 'Unit 5 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 6 (Sports)',
    items: [
      { name: 'Unit 6: Sports - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-6/' },
      { name: 'Unit 6 Sports - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+6+Sports+Bangla' },
      { name: 'Unit 6 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 7 (Environment)',
    items: [
      { name: 'Unit 7: Environment - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-7/' },
      { name: 'Unit 7 Environment - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+7+Environment+Bangla' },
      { name: 'Unit 7 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - Unit 8 (Media)',
    items: [
      { name: 'Unit 8: Media - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/unit-8/' },
      { name: 'Unit 8 Media - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+Unit+8+Media+Bangla' },
      { name: 'Unit 8 Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
    ],
  },

  {
    name: 'SSC | ১ম পত্র - সকল Chapter',
    items: [
      { name: 'SSC English 1st Paper Full - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-1st-paper/' },
      { name: 'SSC English 1st Paper Full - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+1st+Paper+all+units+Bangla' },
      { name: 'SSC English 1st Paper - Shikho', web: 'https://shikho.com/ssc/english-1st-paper' },
      { name: 'SSC English 1st Paper - Udvash', web: 'https://udvash.com/ssc-english-1st' },
    ],
  },

  // ─────────────────────────────────────────────
  //  SSC — 2ND PAPER (Full Grammar Course)
  // ─────────────────────────────────────────────
  {
    name: 'SSC | ২য় পত্র - সম্পূর্ণ',
    items: [
      { name: 'SSC English 2nd Paper Full - 10 Minute School', web: 'https://10minuteschool.com/ssc/english-2nd-paper/' },
      { name: 'SSC English 2nd Paper Full - YouTube', web: 'https://www.youtube.com/results?search_query=SSC+English+2nd+Paper+full+course+Bangla' },
      { name: 'SSC English 2nd Paper - Shikho', web: 'https://shikho.com/ssc/english-2nd-paper' },
      { name: 'SSC English 2nd Paper - Udvash', web: 'https://udvash.com/ssc-english-2nd' },
      { name: 'SSC English 2nd Paper - Bohubrihi', web: 'https://bohubrihi.com/course/ssc-english/' },
    ],
  },

  // ─────────────────────────────────────────────
  //  HSC — GRAMMAR (Part by Part)
  // ─────────────────────────────────────────────
  {
    name: 'HSC | Parts of Speech',
    items: [
      { name: 'Parts of Speech - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/parts-of-speech/' },
      { name: 'Noun & Pronoun - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Noun+Pronoun+Bangla+lecture' },
      { name: 'Adjective & Adverb - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Adjective+Adverb+Bangla' },
      { name: 'Verb Types - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Verb+types+Bangla' },
      { name: 'Parts of Speech - Shikho', web: 'https://shikho.com/hsc/english/grammar' },
    ],
  },

  {
    name: 'HSC | Tense',
    items: [
      { name: 'Tense (Full) - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/tense/' },
      { name: 'All Tenses - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Tense+full+Bangla+lecture' },
      { name: 'Tense - Shikho', web: 'https://shikho.com/hsc/english/tense' },
      { name: 'Sequence of Tense - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Sequence+of+Tense+Bangla' },
    ],
  },

  {
    name: 'HSC | Voice Change',
    items: [
      { name: 'Voice Change - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/voice-change/' },
      { name: 'Active to Passive - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Voice+Change+Bangla+lecture' },
      { name: 'Voice - Shikho', web: 'https://shikho.com/hsc/english/voice' },
      { name: 'Voice Change Advanced - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Voice+Change+advanced+Bangladesh' },
    ],
  },

  {
    name: 'HSC | Narration',
    items: [
      { name: 'Narration - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/narration/' },
      { name: 'Direct & Indirect Speech - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Narration+Direct+Indirect+Bangla' },
      { name: 'Narration - Shikho', web: 'https://shikho.com/hsc/english/narration' },
      { name: 'Narration Advanced - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Narration+advanced+Bangladesh' },
    ],
  },

  {
    name: 'HSC | Transformation of Sentences',
    items: [
      { name: 'Transformation - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/transformation/' },
      { name: 'Sentence Transformation - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Transformation+Sentences+Bangla' },
      { name: 'Affirmative Negative - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Affirmative+Negative+Transformation+Bangla' },
      { name: 'Transformation - Shikho', web: 'https://shikho.com/hsc/english/transformation' },
    ],
  },

  {
    name: 'HSC | Right Form of Verbs',
    items: [
      { name: 'Right Form of Verbs - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/right-form-of-verbs/' },
      { name: 'Right Form of Verbs - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+Right+Form+of+Verbs+full+Bangla' },
      { name: 'Right Form of Verbs - Shikho', web: 'https://shikho.com/hsc/english/right-form' },
    ],
  },

  {
    name: 'HSC | Articles',
    items: [
      { name: 'Articles - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/articles/' },
      { name: 'Use of A/An/The - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Articles+a+an+the+Bangla' },
      { name: 'Articles - Shikho', web: 'https://shikho.com/hsc/english/articles' },
    ],
  },

  {
    name: 'HSC | Prepositions',
    items: [
      { name: 'Prepositions - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/prepositions/' },
      { name: 'Prepositions Full - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Prepositions+full+Bangla' },
      { name: 'Prepositions - Shikho', web: 'https://shikho.com/hsc/english/prepositions' },
    ],
  },

  {
    name: 'HSC | Sentence Connectors',
    items: [
      { name: 'Sentence Connectors - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/sentence-connectors/' },
      { name: 'Connectors & Linkers - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Sentence+Connectors+Linkers+Bangla' },
      { name: 'Sentence Connectors - Shikho', web: 'https://shikho.com/hsc/english/connectors' },
    ],
  },

  {
    name: 'HSC | Modifiers',
    items: [
      { name: 'Modifiers - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/modifiers/' },
      { name: 'Pre & Post Modifiers - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Modifiers+Pre+Post+Bangla' },
      { name: 'Modifiers - Shikho', web: 'https://shikho.com/hsc/english/modifiers' },
    ],
  },

  {
    name: 'HSC | Clauses',
    items: [
      { name: 'Clauses - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/clauses/' },
      { name: 'Noun Clause - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Noun+Clause+Bangla' },
      { name: 'Adjective Clause - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Adjective+Clause+Bangla' },
      { name: 'Adverbial Clause - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Adverbial+Clause+Bangla' },
      { name: 'Clauses - Shikho', web: 'https://shikho.com/hsc/english/clauses' },
    ],
  },

  {
    name: 'HSC | Phrases',
    items: [
      { name: 'Phrases - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/phrases/' },
      { name: 'Noun Phrase & Verb Phrase - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Phrases+Bangla+lecture' },
      { name: 'Phrases - Shikho', web: 'https://shikho.com/hsc/english/phrases' },
    ],
  },

  {
    name: 'HSC | Suffix & Prefix',
    items: [
      { name: 'Suffix & Prefix - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/suffix-prefix/' },
      { name: 'Suffix & Prefix - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Suffix+Prefix+Bangla' },
      { name: 'Suffix & Prefix - Shikho', web: 'https://shikho.com/hsc/english/suffix-prefix' },
    ],
  },

  {
    name: 'HSC | Punctuation',
    items: [
      { name: 'Punctuation - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/punctuation/' },
      { name: 'Punctuation Full - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Punctuation+full+Bangla' },
      { name: 'Punctuation - Shikho', web: 'https://shikho.com/hsc/english/punctuation' },
    ],
  },

  // ─────────────────────────────────────────────
  //  HSC — WRITING (Part by Part)
  // ─────────────────────────────────────────────
  {
    name: 'HSC | Paragraph Writing',
    items: [
      { name: 'Paragraph Writing - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/paragraph/' },
      { name: 'Paragraph Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Paragraph+Writing+Bangla' },
      { name: 'Important Paragraphs - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+important+paragraphs+Bangladesh' },
      { name: 'Paragraph - Shikho', web: 'https://shikho.com/hsc/english/paragraph' },
    ],
  },

  {
    name: 'HSC | Letter & Email Writing',
    items: [
      { name: 'Letter Writing - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/letter-writing/' },
      { name: 'Formal Letter - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Formal+Letter+Writing+Bangla' },
      { name: 'Email Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Email+Writing+Bangla' },
      { name: 'Letter Writing - Shikho', web: 'https://shikho.com/hsc/english/letter' },
    ],
  },

  {
    name: 'HSC | Essay / Composition',
    items: [
      { name: 'Essay Writing - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/essay/' },
      { name: 'Essay Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Essay+Composition+Bangla' },
      { name: 'Important Essays - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+important+essays+Bangladesh' },
      { name: 'Essay - Shikho', web: 'https://shikho.com/hsc/english/essay' },
    ],
  },

  {
    name: 'HSC | Summary Writing',
    items: [
      { name: 'Summary Writing - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/summary/' },
      { name: 'Summary Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Summary+Writing+Bangla' },
      { name: 'Summary - Shikho', web: 'https://shikho.com/hsc/english/summary' },
    ],
  },

  {
    name: 'HSC | Report Writing',
    items: [
      { name: 'Report Writing - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/report-writing/' },
      { name: 'Report Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Report+Writing+Bangla' },
      { name: 'Report Writing - Shikho', web: 'https://shikho.com/hsc/english/report' },
    ],
  },

  {
    name: 'HSC | Dialogue Writing',
    items: [
      { name: 'Dialogue Writing - 10 Minute School', web: 'https://10minuteschool.com/hsc/english/dialogue/' },
      { name: 'Dialogue Writing - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+Dialogue+Writing+Bangla' },
      { name: 'Dialogue - Shikho', web: 'https://shikho.com/hsc/english/dialogue' },
    ],
  },

  // ─────────────────────────────────────────────
  //  HSC — 1ST PAPER (Chapter Wise)
  // ─────────────────────────────────────────────
  {
    name: 'HSC | ১ম পত্র - Unit 1 (Travel)',
    items: [
      { name: 'Unit 1: Travel - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-1/' },
      { name: 'Unit 1 Travel - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+1+Travel+Bangla' },
      { name: 'Unit 1 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 2 (Health)',
    items: [
      { name: 'Unit 2: Health - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-2/' },
      { name: 'Unit 2 Health - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+2+Health+Bangla' },
      { name: 'Unit 2 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 3 (Education)',
    items: [
      { name: 'Unit 3: Education - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-3/' },
      { name: 'Unit 3 Education - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+3+Education+Bangla' },
      { name: 'Unit 3 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 4 (Science & Technology)',
    items: [
      { name: 'Unit 4: Science & Technology - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-4/' },
      { name: 'Unit 4 Science & Technology - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+4+Science+Technology+Bangla' },
      { name: 'Unit 4 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 5 (Sports & Games)',
    items: [
      { name: 'Unit 5: Sports - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-5/' },
      { name: 'Unit 5 Sports - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+5+Sports+Games+Bangla' },
      { name: 'Unit 5 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 6 (Literature)',
    items: [
      { name: 'Unit 6: Literature - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-6/' },
      { name: 'Unit 6 Literature - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+6+Literature+Bangla' },
      { name: 'Unit 6 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 7 (Environment)',
    items: [
      { name: 'Unit 7: Environment - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-7/' },
      { name: 'Unit 7 Environment - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+7+Environment+Bangla' },
      { name: 'Unit 7 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 8 (Media & Culture)',
    items: [
      { name: 'Unit 8: Media & Culture - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-8/' },
      { name: 'Unit 8 Media - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+8+Media+Culture+Bangla' },
      { name: 'Unit 8 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - Unit 9 (Prose & Poetry)',
    items: [
      { name: 'Unit 9: Prose & Poetry - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/unit-9/' },
      { name: 'Unit 9 Prose & Poetry - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+Unit+9+Prose+Poetry+Bangla' },
      { name: 'Unit 9 - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
    ],
  },

  {
    name: 'HSC | ১ম পত্র - সকল Chapter',
    items: [
      { name: 'HSC English 1st Paper Full - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-1st-paper/' },
      { name: 'HSC English 1st Paper Full - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+1st+Paper+all+units+Bangla' },
      { name: 'HSC English 1st Paper - Shikho', web: 'https://shikho.com/hsc/english-1st-paper' },
      { name: 'HSC English 1st Paper - Udvash', web: 'https://udvash.com/hsc-english-1st' },
    ],
  },

  // ─────────────────────────────────────────────
  //  HSC — 2ND PAPER (Full Grammar Course)
  // ─────────────────────────────────────────────
  {
    name: 'HSC | ২য় পত্র - সম্পূর্ণ',
    items: [
      { name: 'HSC English 2nd Paper Full - 10 Minute School', web: 'https://10minuteschool.com/hsc/english-2nd-paper/' },
      { name: 'HSC English 2nd Paper Full - YouTube', web: 'https://www.youtube.com/results?search_query=HSC+English+2nd+Paper+full+course+Bangla' },
      { name: 'HSC English 2nd Paper - Shikho', web: 'https://shikho.com/hsc/english-2nd-paper' },
      { name: 'HSC English 2nd Paper - Udvash', web: 'https://udvash.com/hsc-english-2nd' },
      { name: 'HSC English 2nd Paper - Bohubrihi', web: 'https://bohubrihi.com/course/hsc-english/' },
    ],
  },

  // ─────────────────────────────────────────────
  //  সকল পোর্টাল
  // ─────────────────────────────────────────────
  {
    name: 'সকল পোর্টাল (English)',
    items: [
      { name: '10 Minute School - English', web: 'https://10minuteschool.com/skill/english/' },
      { name: 'Shikho - English', web: 'https://shikho.com/english' },
      { name: 'Udvash Online - English', web: 'https://udvash.com/english' },
      { name: 'Bohubrihi - English', web: 'https://bohubrihi.com/course/english/' },
      { name: 'Khan Academy - English', web: 'https://www.khanacademy.org/humanities/grammar' },
      { name: 'BBC Learning English', web: 'https://www.bbc.co.uk/learningenglish' },
      { name: 'YouTube SSC+HSC English All', web: 'https://www.youtube.com/results?search_query=SSC+HSC+English+Grammar+lecture+Bangla' },
    ],
  },
];

const EnglishAll = () => {
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
      }}>
        {subCategories.map((sub, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSub(selectedSub?.name === sub.name ? null : sub)}
            style={{
              padding: '7px 13px',
              background: selectedSub?.name === sub.name ? COLOR : '#1a3a5c',
              border: `1px solid ${COLOR}55`,
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer',
              fontFamily: "'Noto Sans Bengali', 'Segoe UI', Arial, sans-serif",
              fontSize: '13px',
              transition: 'background 0.2s',
            }}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {selectedSub && (
        <ItemPanel
          items={selectedSub.items}
          title={`🇬🇧 English - ${selectedSub.name}`}
          color={COLOR}
          icon={ICON}
          onClose={() => setSelectedSub(null)}
        />
      )}
    </div>
  );
};

export default EnglishAll;