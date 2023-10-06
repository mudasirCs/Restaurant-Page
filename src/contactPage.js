import profilePic1 from "./teaProfile1.jpeg";
import profilePic2 from "./teaProfile2.jpeg";
import profilePic3 from "./teaProfile3.jpeg";

const contacts = [
  {
    name: "Ahmet Yilmaz",
    position: "Owner",
    number: "+90 123 456 7890",
    email: "ahmet@example.com",
    profile: profilePic1,
  },
  {
    name: "Chehangir Demir",
    position: "Tea Specialist",
    number: "+90 234 567 8901",
    email: "chehangir@example.com",
    profile: profilePic2,
  },
  {
    name: "Mehmet Arslan",
    position: "Manager",
    number: "+90 345 678 9012",
    email: "mehmet@example.com",
    profile: profilePic3,
  },
];

const teaShopDetails = {
  name: "Bosphorous Brews",
  address: "123 Tea Street",
  location: "Istanbul, Turkey",
  landline: "+90 123 456 7890",
  hoursOfOperation: {
    Monday: "9:00 AM - 6:00 PM",
    Tuesday: "9:00 AM - 6:00 PM",
    Wednesday: "9:00 AM - 6:00 PM",
    Thursday: "9:00 AM - 6:00 PM",
    Friday: "9:00 AM - 6:00 PM",
    Saturday: "10:00 AM - 4:00 PM",
    Sunday: "Closed",
  },
};

export default function loadContactPage(contentDiv) {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactItems = [];
  //div.contact-container>div.shopInfo+div.contact-items*n>--
  //-- (img.profile+p.name+p.position)+(p.number+p.email)
  //profile, name, position, number , email
  for (let i = 0; i < contacts.length; i++) {
    const profile = document.createElement("div");
    profile.classList.add("profile");

    const contactImg = document.createElement("img");
    contactImg.classList.add("contact-img");
    contactImg.src = contacts[i].profile;
    contactImg.alt = `Picture of ${contacts[i].position}`;

    const contactName = document.createElement("p");
    contactName.innerText = contacts[i].name;
    contactName.classList.add("contact-name");

    profile.appendChild(contactImg);
    profile.appendChild(contactName);

    const details = document.createElement("div");
    details.classList.add("details");

    const contactPosition = document.createElement("p");
    contactPosition.innerText = `Position: ${contacts[i].position}`;
    contactPosition.classList.add("contact-details");

    const contactNumber = document.createElement("p");
    contactNumber.innerText = `Number: ${contacts[i].number}`;
    contactNumber.classList.add("contact-details");

    const contactEmail = document.createElement("p");
    contactEmail.innerText = `Email: ${contacts[i].email}`;
    contactEmail.classList.add("contact-details");

    details.appendChild(contactPosition);
    details.appendChild(contactNumber);
    details.appendChild(contactEmail);

    contactItems[i] = document.createElement("div");
    contactItems[i].classList.add("contact-item");

    contactItems[i].appendChild(profile);
    contactItems[i].appendChild(details);
  }

  const shopInfo = document.createElement("div");
  shopInfo.classList.add("shop-info");

  //name,address, location, landline, hours
  for (const detail in teaShopDetails) {
    if (detail === "hoursOfOperation") continue;
    const shopDetails = document.createElement("p");
    shopDetails.innerText = `${detail}: ${teaShopDetails[detail]}`;
    shopDetails.classList.add("shop-details");
    shopInfo.appendChild(shopDetails);
  }
  const shopSchedule = document.createElement("div");
  shopSchedule.classList.add("shop-schedule");

  const shopScheduleTitle = document.createElement("p");
  shopScheduleTitle.innerText = "Timings";
  shopScheduleTitle.classList.add("schedule-title");
  shopSchedule.appendChild(shopScheduleTitle);

  const hoursOfOperation = teaShopDetails["hoursOfOperation"];
  for (const day in hoursOfOperation) {
    const dayTimings = hoursOfOperation[day];
    const dayText = document.createElement("p");
    dayText.innerText = `${day}:------------${dayTimings}`;
    dayText.classList.add("time-details");
    shopSchedule.appendChild(dayText);
  }
  shopInfo.appendChild(shopSchedule);

  for (let i = 0; i < contactItems.length; i++) {
    contactContainer.append(contactItems[i]);
  }
  contactContainer.appendChild(shopInfo);
  contentDiv.appendChild(contactContainer);
}
