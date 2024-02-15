import { useState } from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faBucket,
  faFlask,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

const content = [
  {
    summary: "STONE MESSAGE",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in reiciendis, tempore iure eveniet necessitatibus eum inventore corporis nam facere distinctio, qui consequatur tenetur vel ut? Amet voluptas dolores omnis voluptates. Perferendis odio non magnam similique pariatur a unde ad quaerat ipsa, voluptatibus recusandae provident distinctio, architecto eligendi tempore tempora",
    imgUrl: "/images/stones-oiling.png",
    imgAlt: "Stone-Message-img",
  },
  {
    summary: "AROMA THERAPY",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in reiciendis, tempore iure eveniet necessitatibus eum inventore corporis nam facere distinctio, qui consequatur tenetur vel ut? Amet voluptas dolores omnis voluptates. Perferendis odio non magnam similique pariatur a unde ad quaerat ipsa, voluptatibus recusandae provident distinctio, architecto eligendi tempore tempora",
    imgUrl: "/images/stones-aroma.jpg",
    imgAlt: "Aroma-Therapy-img",
  },
  {
    summary: "OIL MESSAGE",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in reiciendis, tempore iure eveniet necessitatibus eum inventore corporis nam facere distinctio, qui consequatur tenetur vel ut? Amet voluptas dolores omnis voluptates. Perferendis odio non magnam similique pariatur a unde ad quaerat ipsa, voluptatibus recusandae provident distinctio, architecto eligendi tempore tempora",
    imgUrl: "/images/stones-oil.png",
    imgAlt: "Oil-message-img",
  },
  {
    summary: "FACIAL",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in reiciendis, tempore iure eveniet necessitatibus eum inventore corporis nam facere distinctio, qui consequatur tenetur vel ut? Amet voluptas dolores omnis voluptates. Perferendis odio non magnam similique pariatur a unde ad quaerat ipsa, voluptatibus recusandae provident distinctio, architecto eligendi tempore tempora",
    imgUrl: "/images/stones-facial.jpg",
    imgAlt: "Aroma-Therapy-img",
  },
];

const iconList = [faDroplet, faBucket, faFlask, faFaceSmile];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        {iconList.map((icon, index) => (
          <FAIcon
            key={index}
            icon={icon}
            className={`services-icon container ${
              activeTab === index ? "active" : "tab"
            }`}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      <TabContent item={content[activeTab]} key={content[activeTab].summary} />
    </div>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="tab-content container">
      <div>
        <h8>{item.summary}</h8>
        {showDetails && <p className="services-para">{item.details}</p>}
      </div>

      <div>
        {showDetails && (
          <img src={item.imgUrl} alt={item.imgAlt} className="services-img" />
        )}
      </div>
    </div>
  );
}
