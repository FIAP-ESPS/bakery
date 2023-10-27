function displayEditions(editOptions) {
  for (const edition of editOptions) {
    console.log(`\n${editOptions.indexOf(edition)} - ${edition}`);
  }
}

export default displayEditions;
