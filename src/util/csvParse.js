const csv = require("csv-parser");
const fs = require("fs");

const tagColorOptions = [
  {
    normal: "#a4c2f4",
    light: "#c9daf8",
  },
  {
    normal: "#b6d7a8",
    light: "#d9ead3",
  },
  {
    normal: "#ffe599",
    light: "#fff2cc",
  },
  {
    normal: "#d5a6bd",
    light: "#ead1dc",
  },
  {
    normal: "#f9cb9c",
    light: "#fce5cd",
  },
  {
    normal: "#a2c4c9",
    light: "#d0e0e3",
  },
  {
    normal: "#b4a7d6",
    light: "#d9d2e9",
  },
];

async function parseCSVs() {
  const rawAnalysis = [];
  const rawTags = [];
  const analysis = {
    bottlenecks: [],
    solutions: [],
  };
  const tags = {
    bottlenecks: [],
    solutions: [],
  };

  const experienceTable = {
    "<1": "<1",
    "3-Jan": "1-3",
    "5-Mar": "3-5",
    "10-May": "5-10",
    "20-Oct": "10-20",
    ">20": ">20",
  };

  await fs
    .createReadStream("../csv/analysis.csv")
    .pipe(csv())
    .on("data", (data) => rawAnalysis.push(data))
    .on("end", async () => {
      let bottlenecks = [],
        solutions = [];

      rawAnalysis.forEach((item) => {
        console.log(item);
        const occupations = item.Occupation.split(",");
        const experience =
          experienceTable[
            item["Years involved in aging R&D, policy or outreach"]
          ];
        bottlenecks.push({
          title: item["Q2-Bottleneck1-Title"],
          description: item["Q2-Bottleneck1-Why"],
          tags: item["Q2.1 Tags"].match(/(\[.+\])/g),
          occupations,
          experience,
        });
        bottlenecks.push({
          title: item["Q2-Bottleneck2-Title"],
          description: item["Q2-Bottleneck2-Why"],
          tags: item["Q2.2 Tags"].match(/(\[.+\])/g),
          occupations,
          experience,
        });
        bottlenecks.push({
          title: item["Q2-Bottleneck3-Title"],
          description: item["Q2-Bottleneck3-Why"],
          tags: item["Q2.3 Tags"].match(/(\[.+\])/g),
          occupations,
          experience,
        });
        solutions.push({
          title: item["Q3-Solution"],
          tags: item["Q3 Tags"].match(/(\[.+\])/g),
          occupations,
          experience,
        });
      });

      bottlenecks = bottlenecks.filter((bottleneck) => bottleneck.tags);
      solutions = solutions.filter((solution) => solution.tags);
      analysis.bottlenecks = bottlenecks;
      analysis.solutions = solutions;

      await fs.writeFile("analysis.json", JSON.stringify(analysis), () => {});
    });

  await fs
    .createReadStream("../csv/tags.csv")
    .pipe(csv())
    .on("data", (data) => rawTags.push(data))
    .on("end", async () => {
      let bottlenecks = [],
        solutions = [],
        bottleneckGroupIndex = -1, // start these indices at -1 because we're going to increment each time we find a new parent tag, i.e. first tag will go to index 0
        solutionGroupIndex = -1;

      rawTags.forEach((item) => {
        const bottleneckTag = item["Q2 Bottleneck"]?.match(/(\[.+\])/)?.[0];
        const solutionTag = item["Q3 Solution"]?.match(/(\[.+\])/)?.[0];

        const isParentTagBottleneck = bottleneckTag?.length === 3; // change to regex this is terrible
        if (isParentTagBottleneck) {
          bottleneckGroupIndex++;
        }
        const isParentTagSolution = solutionTag?.length === 4; // change to regex this is terrible
        if (isParentTagSolution) {
          solutionGroupIndex++;
        }

        bottlenecks.push({
          tag: bottleneckTag,
          color: isParentTagBottleneck
            ? tagColorOptions[bottleneckGroupIndex].normal
            : tagColorOptions[bottleneckGroupIndex].light,
          "Q2 Bottleneck": item["Q2 Bottleneck"],
          "Number of responses": item["# (bottlenecks only)"],
          "Bottleneck Description": item["Bottleneck Description"],
        });

        solutions.push({
          tag: item["Q3 Solution"]?.match(/(\[.+\])/)?.[0],
          color: isParentTagSolution
            ? tagColorOptions[solutionGroupIndex].normal
            : tagColorOptions[solutionGroupIndex].light,
          "Q3 Solution": item["Q3 Solution"],
          "Number of responses": item["# solutions only"],
          "Solution Description": item["Solution Description"],
        });

        bottlenecks = bottlenecks.filter(
          (bottleneck) => bottleneck["Q2 Bottleneck"]
        );

        solutions = solutions.filter((bottleneck) => bottleneck["Q3 Solution"]);

        tags.bottlenecks = bottlenecks;
        tags.solutions = solutions;
      });

      await fs.writeFile("tags.json", JSON.stringify(tags), () => {});
    });
}

parseCSVs();
