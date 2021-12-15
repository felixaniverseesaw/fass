const videos = [
	'https://www.youtube.com/embed/HihsrMzi-rU&t=6s',
	'https://www.youtube.com/embed/8XhO9KF1PcM',
	'https://www.youtube.com/embed/D1qugoVOE5M',
]

// select a video from the array
const video = videos[Math.floor(Math.random() * videos.length)]

// set the video inside the iframe with id myframe
document.getElementById('myframe').src = video
