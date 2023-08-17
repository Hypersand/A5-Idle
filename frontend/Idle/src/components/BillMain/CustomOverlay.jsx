import "../../styles/CustomOverlay.css";
import carMasterHyundai from "../../assets/images/carMasterHyundai.svg";

function CustomOverlay(data, onClick) {
  const container = document.createElement("div");
  container.classList.add("st-container");

  const header = document.createElement("div");
  header.classList.add("st-header");
  container.appendChild(header);

  const closeButton = document.createElement("div");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", onClick);
  closeButton.classList.add("st-btn");
  header.appendChild(closeButton);

  const main = document.createElement("div");
  main.classList.add("st-main");
  container.appendChild(main);

  const content = document.createElement("div");
  content.classList.add("st-content");
  main.appendChild(content);

  const title = document.createElement("div");
  title.textContent = "현대자동차 " + data.masterDealerShip;
  title.classList.add("st-title");
  content.appendChild(title);

  const name = document.createElement("div");
  name.textContent = data.masterName;
  name.classList.add("st-name");
  content.appendChild(name);

  const hr = document.createElement("div");
  hr.classList.add("st-hr");
  content.appendChild(hr);

  const image = document.createElement("img");
  image.src = carMasterHyundai;
  image.classList.add("st-img");
  main.appendChild(image);

  const footer = document.createElement("div");
  footer.classList.add("st-footer");
  container.appendChild(footer);

  const addressName = document.createElement("div");
  addressName.textContent = "Address : " + data.masterAddress;
  addressName.classList.add("st-footer-content");
  footer.appendChild(addressName);

  const phoneNumber = document.createElement("div");
  phoneNumber.textContent = "TEL : " + data.masterPhoneNumber;
  phoneNumber.classList.add("st-footer-content");
  footer.appendChild(phoneNumber);

  const description = document.createElement("div");
  description.textContent = data.masterDescription;
  description.classList.add("st-footer-content");
  footer.appendChild(description);

  return container;
}

export default CustomOverlay;
