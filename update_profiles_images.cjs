async function run() {
  const teams = await import('./src/data/teams.js');
  console.log("Exported keys:", Object.keys(teams));
}
run();
