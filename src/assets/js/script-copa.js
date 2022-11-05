
let IsIgnite = false;

function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = IsIgnite 
    ? "url(./assets/icons/bg-explorer.svg)" 
    : "url(./assets/icons/bg-ignite.svg)" 
    IsIgnite = !IsIgnite;
    card.style.backgroundImage = backgroundImage
}