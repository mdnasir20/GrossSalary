function calculateSalary(hours, hourlySalary) {
		
	var salary = (hours * hourlySalary).toFixed(2);
		
		return salary;
}

function showGrossSalary() {
		
	var hours = document.getElementById("hours").value;
		
	var hourlySalary = document.getElementById("hourlySalary").value;
		
	calculateSalary(hours, hourlySalary);
		
	document.getElementById("answer").innerHTML = "Gross salary is " + calculateSalary(hours, hourlySalary) + " euros.";
}

