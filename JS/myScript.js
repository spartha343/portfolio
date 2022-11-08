// TagCloud styles
const myTags = ['JavaScript', 'CSS3', 'HTML5', 'React.js', 'Bootstrap', 'Tailwind', 'Node.js', 'Express.js', 'Next.js', 'Angular.js', 'VS Code', 'Firebase', 'MongoDB', 'Netlify', 'Heroku', 'GitHub']

var tagcloud = TagCloud('.content', myTags, {
    radius: 190,
    maxspeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});