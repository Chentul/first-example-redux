export default (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		console.log(typeof startDate + ' ' + startDate !== 'number');
		console.log('textMatch: ' + expense.description.toLowerCase() + ' == ' + text.toLowerCase() + ' ' + textMatch);
		// console.log('match: ' + startDateMatch + ' ' + endDateMatch + ' ' + textMatch);

		return startDateMatch && endDateMatch && textMatch;
	});
};