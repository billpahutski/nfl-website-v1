const images = [
  "https://picsum.photos/300?random=1",
  "https://picsum.photos/300?random=2",
  "https://picsum.photos/300?random=3"
];

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  document.getElementById("randomImage").src = images[randomIndex];
}