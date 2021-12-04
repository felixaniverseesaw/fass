const videos = [
	'https://www.youtube.com/embed/HihsrMzi-rU&t=6s',
	'https://www.youtube.com/embed/8XhO9KF1PcM',
	'https://www.youtube.com/embed/D1qugoVOE5M',
]
document.getElementById('myframe').src = videos[Math.floor(Math.random() * 3)]
