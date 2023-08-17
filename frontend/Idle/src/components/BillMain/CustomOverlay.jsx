import "../../styles/CustomOverlay.css";

function CustomOverlay(data, address, onClick) {
  const overlayContainer = document.createElement("div");
  overlayContainer.classList.add("overlay-container");

  const header = document.createElement("div");
  header.classList.add("header");
  overlayContainer.appendChild(header);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = data.masterDealerShip;
  header.appendChild(title);

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", onClick);
  header.appendChild(closeButton);

  const addressElement = document.createElement("div");
  addressElement.classList.add("address");
  addressElement.textContent = address;
  overlayContainer.appendChild(addressElement);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  overlayContainer.appendChild(infoContainer);

  const info = document.createElement("div");
  info.classList.add("info");
  infoContainer.appendChild(info);

  const subTitle = document.createElement("h1");
  subTitle.classList.add("sub-title");
  subTitle.textContent = data.masterName;
  info.appendChild(subTitle);

  const subTitleSmall = document.createElement("h3");
  subTitleSmall.classList.add("sub-title-small");
  subTitleSmall.textContent = data.masterPhoneNumber;
  info.appendChild(subTitleSmall);

  const description = document.createElement("h2");
  description.classList.add("description");
  description.textContent = data.masterDescription;
  info.appendChild(description);

  const dealerImage = document.createElement("img");
  dealerImage.classList.add("dealer-image");
  dealerImage.src = data.masterImgUrl;
  dealerImage.alt = "Dealer";
  infoContainer.appendChild(dealerImage);

  return overlayContainer;
}

export default CustomOverlay;
