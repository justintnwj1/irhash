import { useState } from 'react';
import "./projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faXmark, faListCheck, faPowerOff, faCircleArrowLeft, 
  faCircleArrowRight, faArrowLeft, faHandPointRight 
} from '@fortawesome/free-solid-svg-icons';

// Import all images
import genset from "../../assets/genset1.jpg";
import hpu1 from "../../assets/hpu1.png";
import nodoc from "../../assets/nodoc.png";
import pump1 from "../../assets/pump1.jpg";
import pump2 from "../../assets/pump2.jpg";
import relay1 from "../../assets/relay1.jpg";
import pellet1 from "../../assets/pelletizer1.jpg";
import pellet2 from "../../assets/pelletizer2.jpg";
import balikpapan1 from "../../assets/balikpapan1.jpg";
import balikpapan2 from "../../assets/balikpapan2.jpg";
import pln1 from "../../assets/pln1.jpg";
import muara1 from "../../assets/muara1.jpg";
import muara2 from "../../assets/muara2.jpg";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Pump Control and Monitoring System Polder Kamal",
    pt: "Dinas SDA Jakarta",
    description: [
      'Build electrical system for pump house to prevent tidal flood.',
      'Programmed 2 PLC, HMI and SCADA',
      'Programmed PLC and HMI with studio 5000 and schneider machine expert.',
      'Designed SCADA with factory talk view.',
      'Communication between PLC with modbus TCP/IP.',
      'Communication between PLC and MV panel with Modbus RTU'
    ],
    rotate: "0deg",
    documentation: [pump1, pump2]
  },
  {
    id: 2,
    title: "New Power House Tabang",
    pt: "Bayan Group",
    description: ['Performed load flow and analysis study with ETAP.'],
    rotate: "30deg",
    documentation: [nodoc]
  },
  {
    id: 3,
    title: "Upgrade Test Bench Balikpapan",
    pt: "PT Bosch Rexroth",
    description: [
      'Designed electrical wiring.',
      'Programmed PLC and HMI.',
      'Build electrical system for hydraulic test bench.'
    ],
    rotate: "60deg",
    documentation: [balikpapan1, balikpapan2]
  },
  {
    id: 4,
    title: "Pelletizer Automation System",
    pt: "PT Mangole Timber Producers",
    description: [
      'Build electrical system to produce wood pellet.',
      'Programmed PLC and HMI.',
      'Programmed PLC with panasonic FPWIN PRO.',
      'Programmed HMI with Weintek Easy Builder.',
      'Give training how to operate the new system.',
      'Give training how to maintenance electrical panel.'
    ],
    rotate: "90deg",
    documentation: [pellet1, pellet2]
  },
  {
    id: 5,
    title: "Muara Pahu Coal Loading Jetty",
    pt: "Bayan Group",
    description: [
      'Build electrical system that capable to produce 12.000 MT coal per hour.',
      'Programmed PLC and HMI.',
      'Performed load flow and short circuit analysis with ETAP.'
    ],
    rotate: "120deg",
    documentation: [muara1, muara2]
  },
  {
    id: 6,
    title: "Upgrade Genset => Centrilized Power",
    pt: "Adaro Tuhup",
    description: [
      'Performed load flow and short circuit study with ETAP.',
      'Designed relay protection and coordination with ETAP.'
    ],
    rotate: "150deg",
    documentation: [genset]
  },
  {
    id: 7,
    title: "Kariangau Power Plant",
    pt: "-",
    description: [
      'Performed load flow and short circuit study with ETAP.',
      'Designed relay protection and coordination with ETAP.'
    ],
    rotate: "180deg",
    documentation: [nodoc]
  },
  {
    id: 8,
    title: "HPU Panel",
    pt: "PT Bosch Rexroth",
    description: ['Programmed PLC and HMI.'],
    rotate: "210deg",
    documentation: [hpu1]
  },
  {
    id: 9,
    title: "New Power Connection to PLN",
    pt: "PT Perkasa Inakakerta",
    description: [
      'Build electrical system that integrated power from generator with PLN.',
      'Setting up genset PPU',
      'Programmed PLC and HMI.'
    ],
    rotate: "240deg",
    documentation: [pln1, balikpapan2] // Using balikpapan2 as pln2
  },
  {
    id: 10,
    title: "Relay Coordination Setting",
    pt: "PT. Goodyear Indonesia",
    description: [
      'Performed load flow and short circuit study with ETAP.',
      'Designed device protection and coordination with ETAP.'
    ],
    rotate: "270deg",
    documentation: [relay1]
  },
  {
    id: 11,
    title: "Comming Soon",
    pt: "-",
    description: ['-'],
    rotate: "300deg",
    documentation: [nodoc]
  },
  {
    id: 12,
    title: "Comming Soon",
    pt: "-",
    description: ['-'],
    rotate: "330deg",
    documentation: [nodoc]
  }
];

const Projects = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [imageIndex, setImageIndex] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [onOff, setOnOff] = useState(false);
  const [docsProject, setDocsProject] = useState(false);
  const [details, setDetails] = useState(false);
  
  // Dial configuration
  const totalSegments = 12;
  const radius = 70;
  const centerX = 100;
  const centerY = 100;
  const strokeWidth = 8;
  const angleOffset = -98;

  // Generate segments for the dial
  const segments = Array.from({ length: totalSegments }, (_, index) => {
    const startAngle = (index * (360 / totalSegments) + angleOffset) % 360;
    const endAngle = startAngle + (360 / totalSegments) * 0.5;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const startX = centerX + radius * Math.cos(startRad);
    const startY = centerY + radius * Math.sin(startRad);
    const endX = centerX + radius * Math.cos(endRad);
    const endY = centerY + radius * Math.sin(endRad);

    const isLargeArc = (endAngle - startAngle + 360) % 360 > 180 ? 1 : 0;
    const path = `M ${startX} ${startY} A ${radius} ${radius} 0 ${isLargeArc} 1 ${endX} ${endY}`;

    return { id: index, path };
  });

  // Event handlers
  const handleSegmentClick = (segmentNumber) => setSelectedNumber(segmentNumber);
  
  const handleOnOff = () => {
    setOnOff(!onOff);
    setDetails(false);
  };
  
  const handleDetails = () => {
    setDetails(!details);
    setActiveModal(true);
  };
  
  const handleArrowLeft = () => {
    setSelectedNumber(selectedNumber === 0 ? 11 : selectedNumber - 1);
  };
  
  const handleArrowRight = () => {
    setSelectedNumber(selectedNumber === 11 ? 0 : selectedNumber + 1);
  };
  
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay-projects')) {
      closeModal();
    }
  };
  
  const handleOverlayClickImage = (e) => {
    if (e.target.classList.contains('modal-overlay-project-image')) {
      closeModalImage();
    }
  };
  
  const closeModalImage = () => setActiveModalImage(null);
  
  const closeModal = () => {
    setActiveModal(null);
    setDetails(!details);
  };
  
  const handleDocsProject = () => setDocsProject(true);
  
  const handleBackProject = () => setDocsProject(false);
  
  const handleImageClick = (projectId, index) => {
    setActiveModalImage(projectId);
    setImageIndex(index);
  };

  const currentProject = projectsData[selectedNumber];

  // Helper components
  const ProjectDescription = () => (
    <div className='project-list-desc'>
      <ul className="point-list-project">
        {currentProject?.description.map((point, index) => (
          <li className="point-item-project" key={index}>
            <FontAwesomeIcon icon={faHandPointRight} />
            <span className="text-colored">{point}</span>
          </li>
        ))}
      </ul>
      <h3 className='documentation-project' onClick={handleDocsProject}>
        Documentation
      </h3>
    </div>
  );

  const ProjectDocumentation = () => (
    <div className="documentation-images">
      <FontAwesomeIcon onClick={handleBackProject} icon={faArrowLeft} />
      {currentProject?.documentation.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`Project Documentation ${index}`} 
          onClick={() => handleImageClick(currentProject?.id, index)} 
        />
      ))}
    </div>
  );

  return (
    <div className='projects'>
      <div className='projects-title title'>My Projects</div>
      <div className='projects-content'>
        <div className="multimeter">
          <div className="display">
            {onOff && (
              <>
                <div className="display-value">{currentProject?.title}</div>
                <div className="display-pt">{currentProject?.pt}</div>
              </>
            )}
          </div>
          <div className="buttons">
            <div
              className={`button button-left ${onOff ? 'powerOn' : ''}`}
              onClick={handleOnOff}
            >
              <FontAwesomeIcon icon={faPowerOff} />
            </div>
            <div 
              className={`button button-right ${!onOff ? 'detailsOff' : ''} ${details && onOff ? 'detailsOn' : ''}`} 
              onClick={handleDetails}
            >
              Details
            </div>
          </div>
          <div className='buttonLR'>
            <div className='buttonArrowLeft' onClick={handleArrowLeft}>
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </div>
            <div className='buttonArrowRight' onClick={handleArrowRight}>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center parent-dial">
            <div className="w-64 h-54">
              <svg width="200" height="200" viewBox="0 0 200 200">
                {segments.map((segment) => (
                  <path
                    key={segment.id}
                    d={segment.path}
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    fill="none"
                    cursor="pointer"
                    className="cursor-pointer"
                    onClick={() => handleSegmentClick(segment.id)}
                  />
                ))}
              </svg>
            </div>
          </div>
          <div 
            className="dial" 
            style={{ 
              transform: `rotate(${currentProject?.rotate})`, 
              transition: 'transform 0.5s ease' 
            }}
          >
            <div className="dial-ornamen1"></div>
            <div className="indicator"></div>
            <div className="dial-ornamen2"></div>
          </div>
          <div className="socket-probe">
            <div className="socket socket-right"></div>
            <div className="socket socket-left"></div>
            <div className="socket socket-left"></div>
          </div>
        </div>
        
        <div className={`project-desc ${details ? 'projectOn' : ''}`}>
          <div className="project-container">
            {onOff && !docsProject && <ProjectDescription />}
            {onOff && docsProject && <ProjectDocumentation />}
          </div>
        </div>
        
        {activeModal && (
          <div
            className={`modal-overlay-projects active`}
            onClick={handleOverlayClick}
          >
            <div className="project-container">
              {onOff && !docsProject && <ProjectDescription />}
              {onOff && docsProject && <ProjectDocumentation />}
            </div>
          </div>
        )}
        
        {activeModalImage && (
          <div
            className="modal-overlay-project-image active"
            onClick={handleOverlayClickImage}
          >
            <div className="modal-project-image">
              <img 
                src={projectsData.find(project => project.id === activeModalImage).documentation[imageIndex]} 
                alt="Project documentation fullsize"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;