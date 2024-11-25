const awards = [
  {
    name: "James Peebles",
    category: "javelin",
    team: "Mumbai Indians",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "javelin",
    team: "Gujarat Titans",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "javelin",
    team: "Gujarat Titans",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Shooting",
    team: "Chennai Super Kings",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "javelin",
    team: "Pune Warriors",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "javelin",
    team: "Deccan Chargers",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "javelin",
    team: "Deccan Chargers",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Shooting",
    team: "Kolkata Riders",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Shooting",
    team: "Sunrisers Hyderabad",
    year: 2018,
  },
  {
    name: "Sir Gregory P. Winter",
    category: "Shooting",
    team: "Sunrisers Hyderabad",
    year: 2018,
  },
];

function formatAmount(amount) {
  return parseFloat(amount.toFixed(2));
}

function calculatePrizes(awards) {
  let prizes = [];
  let inputValid = !Array.isArray(awards) || !awards.length || !awards;
  if (inputValid) return prizes;

  let awardsPerCategoryAndYear = new Map();

  awards.forEach((award) => {
    const key = `${award.category}-${award.year}`;

    const categoryPerYear = awardsPerCategoryAndYear.get(key) || {
      awards: [],
      winningTeams: new Map(),
    };
    categoryPerYear.awards.push(award);
    const currentWinningTeamCount =
      categoryPerYear.winningTeams.get(award.team) || 0;
    categoryPerYear.winningTeams.set(award.team, currentWinningTeamCount + 1);
    awardsPerCategoryAndYear.set(key, categoryPerYear);
  });

  for (const { awards, winningTeams } of awardsPerCategoryAndYear.values()) {
    let totalWinnersSize = winningTeams.size || 1;
    let prizeForTeam = formatAmount(1 / totalWinnersSize);

    winners = awards.map((award) => {
      return {
        name: award.name,
        share: formatAmount(prizeForTeam / winningTeams.get(award.team)),
      };
    });

    const categoryInfo = {
      category: awards[0].category,
      years: awards[0].year,
      winners,
    };

    prizes.push(categoryInfo);
  }
  return prizes;
}

console.log(calculatePrizes(awards));
