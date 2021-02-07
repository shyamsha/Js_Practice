const dummyData = [
  { id: 1, value: 12, region: "india" },
  { id: 2, value: 10, region: "China" },
  { id: 3, value: 15, region: "USA" },
  { id: 4, value: 5, region: "Germany" },
];

// d3.select("div")
//   .selectAll("p")
//   .data(dummyData)
//   .enter()
//   .append("p")
//   .text((data) => data.region);

const container = d3
  .select("div")
  .classed("container", true)
  .style("border", "1px solid red");

container
  .selectAll(".bar")
  .data(dummyData)
  .enter()
  .append("div")
  .classed("bar", true)
  .style("width", "50px")
  .style("height", (data) => (data.value * 10) + "px")
  .text(data=>data.region)
