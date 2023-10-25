function displayReports(reportOptions) {
  for (const report of reportOptions) {
    console.log(`\n${reportOptions.indexOf(report)} - ${report}`);
  }
}
module.exports = { displayReports };
