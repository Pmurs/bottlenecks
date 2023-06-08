const csv = require("csv-parser");
const fs = require("fs");

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

  await fs
    .createReadStream("../csv/analysis.csv")
    .pipe(csv())
    .on("data", (data) => rawAnalysis.push(data))
    .on("end", async () => {
      let bottlenecks = [],
        solutions = [];

      //console.log(rawAnalysis);

      rawAnalysis.forEach((item) => {
        bottlenecks.push({
          title: item["Q2-Bottleneck1-Title"],
          description: item["Q2-Bottleneck1-Why"],
          bottleneck: item["Q2.1-Bottleneck"],
          tags: item["Q2.1 Tags"].match(/(\[.+\])/g),
        });
        bottlenecks.push({
          title: item["Q2-Bottleneck2-Title"],
          description: item["Q2-Bottleneck2-Why"],
          bottleneck: item["Q2.2-Bottleneck"],
          tags: item["Q2.2 Tags"].match(/(\[.+\])/g),
        });
        bottlenecks.push({
          title: item["Q2-Bottleneck3-Title"],
          description: item["Q2-Bottleneck3-Why"],
          tags: item["Q2.3 Tags"].match(/(\[.+\])/g),
        });
        solutions.push({
          title: item["Q3-Solution"],
          tags: item["Q2.3 Tags"].match(/(\[.+\])/g),
          investment: item["Investment"],
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
        solutions = [];
      rawTags.forEach((tag) => {
        bottlenecks.push({
          tag: tag["Q2 Bottleneck"]?.match(/(\[.+\])/)?.[0],
          "Q2 Bottleneck": tag["Q2 Bottleneck"],
          "# (bottlenecks only)": tag["# (bottlenecks only)"],
          "# all a": tag["# all a"],
          "Bottleneck Description": tag["Bottleneck Description"],
        });

        solutions.push({
          tag: tag["Q3 Solution"]?.match(/(\[.+\])/)?.[0],
          "Q3 Solution": tag["Q3 Solution"],
          "# solutions only": tag["# solutions only"],
          "# all b": tag["# all b"],
          "Solution Description": tag["Solution Description"],
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
