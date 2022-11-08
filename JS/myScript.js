// TagCloud styles
const myTags = ['JavaScript', 'CSS3', 'HTML5', 'React.js', 'Bootstrap', 'Tailwind', 'Node.js', 'Express.js', 'Next.js', 'Angular.js', 'VS Code', 'Firebase', 'MongoDB', 'Netlify', 'Heroku', 'GitHub']

var tagcloud = TagCloud('.content', myTags, {
    radius: 190,
    maxspeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});


// form submission 
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.classList.add('success');
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    status.classList.add('error');
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                    status.classList.add('error');
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)