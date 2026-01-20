const buildCard = (track) => {
  const card = document.createElement("article");
  card.className = "card";

  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = track.provider || "Learning Track";

  const title = document.createElement("h3");
  title.textContent = track.title;

  const link = document.createElement("a");
  link.href = track.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = "打开课程";

  card.append(tag, title, link);
  return card;
};

const buildResource = (resource) => {
  const row = document.createElement("div");
  row.className = "resource";

  const link = document.createElement("a");
  link.href = resource.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = resource.title;

  const meta = document.createElement("span");
  meta.textContent = resource.type;

  row.append(link, meta);
  return row;
};

const renderTracks = (data) => {
  const trackRoot = document.getElementById("tracks");
  const resourceRoot = document.getElementById("resources");

  if (!trackRoot || !resourceRoot) return;

  data.tracks.forEach((track, index) => {
    const card = buildCard(track);
    card.style.animationDelay = `${index * 0.1}s`;
    trackRoot.appendChild(card);
  });

  data.resources.forEach((resource, index) => {
    const row = buildResource(resource);
    row.style.animationDelay = `${index * 0.1 + 0.2}s`;
    resourceRoot.appendChild(row);
  });
};

fetch("data/learning-tracks.json")
  .then((response) => response.json())
  .then((data) => renderTracks(data))
  .catch(() => {});
