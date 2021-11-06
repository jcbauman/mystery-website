// DO NOT READ THIS FILE UNLESS YOU WANT THE CASE RUINED
// DO NOT READ THIS FILE UNLESS YOU WANT THE CASE RUINED
// DO NOT READ THIS FILE UNLESS YOU WANT THE CASE RUINED
// DO NOT READ THIS FILE UNLESS YOU WANT THE CASE RUINED

import { doc } from "prettier";

const documents = [
  [
    { title: "Sentinel Clipping: Surfer Dies", id: "1" },
    { title: "Medical Examiner's Autopsy Report", id: "2" },
    { title: "Map of Santa Cruz", id: "3" },
    { title: "Crime Scene Incident Report", id: "4" },
    { title: "Bay Federal Bank Statement", id: "5" },
    { title: "SCPD Case Closed Memo", id: "6" },
    { title: "Person of Interest Form: Simone", id: "7" },
    { title: "Suspect Interview: Simone", id: "8" },
    { title: "Person of Interest Form: Kevin", id: "9" },
    { title: "Suspect Interview: Kevin", id: "10" },
    { title: "Person of Interest Form: Nola", id: "11" },
    { title: "Suspect Interview: Nola", id: "12" },
    { title: "Dubois Biotech Lab Logs", id: "13" },
    { title: "Person of Interest Form: Miles", id: "14" },
    { title: "Suspect Interview: Miles", id: "15" },
    { title: "Person of Interest Form: Jade", id: "16" },
    { title: "Suspect Interview: Jade", id: "17" },
    { title: "People's Disco Poster", id: "18" },
    { title: "KZSC Program Schedule", id: "19" },
    { title: "Witness Statement: Tami Gaimes", id: "20" },
    { title: "Tami Karlo Text Conversation", id: "21" },
    { title: "Witness Statement: Daniel Bratton, KZSC", id: "22" },
    { title: "Witness Statement: James Modesto", id: "23" },
  ],
  [{ title: "Sentinel Clipping: Case Reopened", id: "30" }],
  [
    { title: "Witness Statement: Dolly Dobbs", id: "31" },
    { title: "Liquor Store Memo Note with Fight Description", id: "32" },
  ],
  [
    { title: "Suspect Second Interview: Miles", id: "33" },
    { title: "Del Mar Ticket Stub", id: "34" },
  ],
  [{ title: "Suspect Second Interview: Simone", id: "35" }],
];

const documentKeywords = [
  ["newspaper", "surfer", "classefieds", "sentinel", "news"],
  ["autopsy", "medical", "examiner"],
  ["map", "tourism", "tourist", "business"],
  ["crime", "car", "incident", "beach", "evidence"],
  ["bank", "purchase", "bay", "federal", "transaction"],
  ["case", "closed", "scpd"],
  ["simone", "poi", "person of interest"],
  ["simone", "suspect", "interview", "transcript"],
  ["kevin", "poi", "person of interest"],
  ["kevin", "suspect", "interview", "transcript"],
  ["nola", "enola", "poi", "person of interest"],
  ["nola", "enola", "suspect", "interview", "transcript"],
  ["kevin", "dubois", "lab", "log", "science", "baskin"],
  ["miles", "poi", "person of interest"],
  ["miles", "suspect", "interview", "transcript"],
  ["jade", "poi", "person of interest"],
  ["jade", "suspect", "interview", "transcript"],
  ["people", "disco", "poster", "bocci"],
  ["kzsc", "schedule", "program", "simone", "radio"],
  ["tami", "witness", "statement", "tinder"],
  ["tami", "games", "karlo", "text", "screenshot", "tinder"],
  ["daniel", "witness", "bratton", "kzsc", "dj", "simone"],
  ["james", "modesto", "body", "witness", "statement"],
  [],
  [],
  [],
  [],
  [],
  [],
  ["sentinel", "newspaper", "case", "reopened", "news"],
  ["dolly", "liquor", "dobbs", "store"],
  [
    "dolly",
    "dobbs",
    "liquor",
    "store",
    "description",
    "note",
    "biker",
    "club",
    "holy city",
  ],
  ["miles", "suspect", "interview", "transcript", "second"],
  ["del", "mar", "theater", "theatre", "ticket", "kiss", "miles", "rocky"],
  ["simone", "suspect", "interview", "transcript"],
];

export const getDocuments = (obj: number) => {
  let docs = [];
  var i;
  for (i = 0; i < obj; i++) {
    Array.prototype.push.apply(docs, documents[i]);
  }
  return docs;
};

export const getFilterDocuments = (formType, searchKey) => {
  let currentDocs = getDocuments(formType);
  let filteredDocuments = [];
  currentDocs.forEach((document) => {
    (documentKeywords[document.id - 1] ?? []).forEach((keyWord) => {
      if (searchKey.includes(keyWord) || keyWord.includes(searchKey)) {
        if (
          filteredDocuments.filter((doc) => doc.id === document.id).length === 0
        ) {
          filteredDocuments.push(document);
          return;
        }
      }
    });
  });
  return filteredDocuments;
};

export const allDocuments = getDocuments(4);

export const getPrompt = (obj: number) => {
  const prompts = [
    "1.) Which TWO documents suggest that something is off about the death of Karlo Ramos?",
    "2.) Which TWO documents suggest where Karlo was actually headed the night he died?",
    "3.) Which THREE documents suggest who Karlo fought with at the store?",
    "4.) Which TWO documents break one suspect's airtight alibi?",
    "5.) Which THREE documents prove who murdered Karlo?",
  ];
  return prompts[obj - 1];
};

export const getCorrectDocs = (obj) => {
  const correctDocs = [
    ["5", "4"],
    ["30", "21"],
    ["32", "1", "13"],
    ["34", "22"],
    ["35", "11", "4"],
  ];
  return correctDocs[obj - 1];
};

export const suspectList = [
  "Nola",
  "Kevin",
  "Karlo",
  "Simone",
  "Jade",
  "Miles",
];

// DO NOT READ THIS UNLESS YOU WANT THE CASE RUINED

export const getAnswer = (obj) => {
  const answers = [
    "Karlo was found wearing a wetsuit that was two sizes too big, and not the brand new wetsuit he had purchased earlier that day.",
    "Instead of surfing at Steamer Lane, Karlo was picking up drinks for his Tinder date at St. Eamer liquor store.",
    "Kevin could not have been at the liquor store, as his tests during that time all passed.  Miles could not have been at the cowboy bar, as the Holy City Women's Motorcycle club was holding an exclusive meeting there that night.",
    "A daylight savings time shift forward occurred on the morning of March 11, 2018 at 2AM.  According to his statements, the DJ following Simone's radio show would have preset the clocks and kicked her out at 1AM to maintain his full 5 hour show.",
    "Simone would have witnessed Nola having a severe allergic reaction if she had not recently taken her allergy meds, which were locked in Karlo's car!",
    "Jade is the only person who could have killed him! Congratulations!",
  ];
  return answers[obj - 1];
};

export const getHint = (obj, hintNumber) => {
  const hints = [
    [
      "The police would probably not have been able to notice this inconsistency on the day of the murder, but they could have caught it with new information a day or so later.",
      "Perhaps the S.C.P.D. were too ‘weary’ to notice this inconsistency.",
      "Kevin says in his statement that, “Karlo is real particular about how clothes fit him.”",
    ],
    [
      "If Karlo wasn’t planning to surf, what else would he have had on his mind?",
      "Karlo seems to have auto-correct turned off on his phone.",
      "Santa Cruz is a vibrant community with many independent businesses vying for your attention.",
    ],
    [
      "To solve this, you will have to prove that a suspect is where they said they were, and disprove another suspect’s alibi.",
      "Dolly was already in a bad mood that night because of something; that’s probably why she was so quick to pull a gun on the boys.",
      "The Santa Cruz Sentinel has a one week minimum run for their classified ads.",
    ],
    [
      "The Rocky Horror Picture show has a great soundtrack.  “Let’s do the time warp again” is one of its best numbers.",
      "Only one of our suspects has a clearly documented alibi during the time slot of the murder.  Focus on them.",
      "Some KZSC DJs seem to be very particular about keeping their shows consistent.  Simone is probably not one of them.",
    ],
    [
      "Perhaps the most damning observation in this case is not what happened, but rather what didn’t happen.",
      "The last bus left the People’s Disco and would have stopped near Karlo’s house around midnight.",
      "Consider what a person would need to do to complete this murder.  What objects would they have access to that non-murderers would not?",
      "Human intimacy is such a rare occurrence. You can tell so much about what a person is or is not going through just by holding them close.",
    ],
  ];
  return hints[obj - 1][hintNumber % hints[obj - 1].length];
};
