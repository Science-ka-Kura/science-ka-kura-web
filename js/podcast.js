const PODCAST_DATA = [
  {
    id: Math.random(),
    title: "Episod 1: This is a test",
    author: "Pramish Luitel",
    date: "16 Sep 2021",
    time: "2:30:20",
    background_image: "some image url",
  },
  {
    id: Math.random(),
    title: "Episod 2: This is again test",
    author: "Prabesh Thapa",
    date: "17 Sep 2021",
    time: "1:30:20",
    background_image: "some image url",
  },
];

// OR

// Have a podcast API and call that Podcast API here. Need to discuss with Prabesh dai.

PODCAST_DATA.forEach((eachData) => {
  const podcastContainer = document.getElementById("podcast-container");

  // Podcast data container
  const podcastDataContainer = document.createElement("div");
  podcastDataContainer.id = "podcast-data-container";
  podcastDataContainer.className =
    "d-block d-md-flex podcast-entry bg-white mb-5";
  podcastDataContainer.dataset.aos = "fade-up";
  podcastDataContainer.style.border = "2px solid black";

  // podcast image div
  const podcastImageDiv = document.createElement("div");
  podcastImageDiv.className = "image";
  // Have the image from API as well.
  podcastImageDiv.style.backgroundImage = "url(images/img_1.jpg)";

  // podcast text container
  const podcastDataTextContainer = document.createElement("div");
  podcastDataTextContainer.className = "text";
  const eachPodcastTitle = document.createElement("h3");
  eachPodcastTitle.className = "font-weight-light";

  // podcast title link
  const eachPodcastLink = document.createElement("a");
  eachPodcastLink.href = "single-post.html";
  eachPodcastLink.textContent = eachData.title;

  // podcast subtitle
  const podcastSubtitleContainer = document.createElement("div");
  podcastSubtitleContainer.className = "text-white mb-3";
  const podcastSubtitleSpan = document.createElement("span");
  podcastSubtitleSpan.className = "text-black-opacity-05";
  const podcastSubtitleSpanTextContainer = document.createElement("small");
  podcastSubtitleSpanTextContainer.innerHTML = `By ${eachData.author} <span class="sep">/</span> ${eachData.date} <span class="sep">/</span> ${eachData.time}`;

  // Podcast description
  const podcastDescription = document.createElement("p");
  podcastDescription.className = "mb-4";
  podcastDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellat mollitia consequatur, optio nesciunt placeat. Istevoluptates excepturi tenetur, nesciunt.";

  // Podcast media player container
  const podcastMediaPlayer = document.createElement("div");
  podcastMediaPlayer.className = "player";
  const podcastAudio = document.createElement("audio");
  podcastAudio.id = "player2";
  podcastAudio.style.maxWidth = "100%";
  podcastAudio.preload = "none";

  const podcastAudioSource = document.createElement("source");
  podcastAudioSource.src =
    "http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3";
  podcastAudioSource.type = "audio/mp3";

  eachPodcastTitle.appendChild(eachPodcastLink);
  podcastDataTextContainer.appendChild(eachPodcastTitle);
  podcastDataTextContainer.appendChild(podcastSubtitleContainer);
  podcastSubtitleContainer.appendChild(podcastSubtitleSpan);
  podcastSubtitleSpan.appendChild(podcastSubtitleSpanTextContainer);
  podcastDataTextContainer.appendChild(podcastDescription);
  podcastDataTextContainer.appendChild(podcastMediaPlayer);
  podcastMediaPlayer.appendChild(podcastAudio);
  podcastAudio.appendChild(podcastAudioSource);

  podcastDataContainer.appendChild(podcastImageDiv);
  podcastDataContainer.appendChild(podcastDataTextContainer);

  podcastContainer.appendChild(podcastDataContainer);
});
