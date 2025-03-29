import { useState, useEffect } from 'react';
import "./projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faListCheck, faPowerOff, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const [onOff, setOnOff] = useState(false);
  const [details, setDetails] = useState(false);
  const [number, setNumber] = useState(null);
  const totalSegments = 12;
  // Mengecilkan ukuran radius
  const radius = 70; // Ukuran radius dikecilkan dari 120 menjadi 80
  const centerX = 100; // Mengecilkan center dari 150 menjadi 100
  const centerY = 100; // Mengecilkan center dari 150 menjadi 100
  const strokeWidth = 8; // Mengecilkan strokeWidth dari 8 menjadi 6
  const angleOffset = -98;

  const projects = [
    {
      title: "Pump Control and Monitoring System Polder Kamal",
      pt: "Dinas SDA Jakarta",
      description: "Description for Project 1",
      image: "https://via.placeholder.com/150",
      rotate: "0deg"
    },
    {
      title: "New Power House Tabang",
      pt: "Bayan Group",
      description: "Description for Project 2",
      image: "https://via.placeholder.com/150",
      rotate: "30deg"
    },
    {
      title: "Upgrade Test Bench Balikpapan",
      pt: "PT Bosch Rexroth",
      description: "Description for Project 3",
      image: "https://via.placeholder.com/150",
      rotate: "60deg"
    },
    {
      title: "Pelletizer Automation System",
      pt: "PT Mangole Timber Producers",
      description: "Description for Project 4",
      image: "https://via.placeholder.com/150",
      rotate: "90deg"
    },
    {
      title: "Muara Pahu Coal Loading Jetty",
      pt: "Bayan Group",
      description: "Description for Project 5",
      image: "https://via.placeholder.com/150",
      rotate: "120deg"
    },
    {
      title: "Upgrade Genset",
      pt: "Adaro Tuhup",
      description: "Description for Project 6",
      image: "https://via.placeholder.com/150",
      rotate: "150deg"
    },
    {
      title: "Kariangau Power Plant",
      pt: "-",
      description: "Description for Project 7",
      image: "https://via.placeholder.com/150",
      rotate: "180deg"
    },
    {
      title: "HPU Panel",
      pt: "PT Bosch Rexroth",
      description: "Description for Project 8",
      image: "https://via.placeholder.com/150",
      rotate: "210deg"
    },
    {
      title: "New Power Connection to PLN",
      pt: "PT Perkasa Inakakerta",
      description: "Description for Project 9",
      image: "https://via.placeholder.com/150",
      rotate: "240deg"
    },
    {
      title: "Relay Coordination Setting",
      pt: "PT. Goodyear Indonesia",
      description: "Description for Project 10",
      image: "https://via.placeholder.com/150",
      rotate: "270deg"
    },
    {
      title: "Comming Soon",
      pt: "-",
      description: "Description for Project 11",
      image: "https://via.placeholder.com/150",
      rotate: "300deg"
    },
    {
      title: "Comming Soon",
      pt: "-",
      description: "Description for Project 12",
      image: "https://via.placeholder.com/150",
      rotate: "330deg"
    }
  ];


  const segments = Array.from({ length: totalSegments }, (_, index) => {
    const startAngle = (index * (360 / totalSegments) + angleOffset) % 360;
    const endAngle = startAngle + (360 / totalSegments) * 0.5; // Buat segmen lebih pendek (50% dari total)

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const startX = centerX + radius * Math.cos(startRad);
    const startY = centerY + radius * Math.sin(startRad);
    const endX = centerX + radius * Math.cos(endRad);
    const endY = centerY + radius * Math.sin(endRad);

    // Buat path untuk segmen lingkaran
    const isLargeArc = (endAngle - startAngle + 360) % 360 > 180 ? 1 : 0;
    const path = `M ${startX} ${startY} A ${radius} ${radius} 0 ${isLargeArc} 1 ${endX} ${endY}`;

    return {
      id: index,
      path,
      middleAngle: (startAngle + endAngle) / 2
    };
  });

  const handleSegmentClick = (segmentNumber) => {
    setSelectedNumber(segmentNumber);
  };

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
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  // Close modal
  const closeModal = () => {
    setActiveModal(null);
    setDetails(!details);
  };

  return (
    <div className='projects'>
      <div className='projects-title title'>My Projects</div>
      <div className='projects-content'>
        <div className="multimeter">
          <div className="display">
            {onOff && (
              <>
                <div className="display-value">
                  {projects[selectedNumber]?.title}
                </div>
                <div className="display-pt">
                  {projects[selectedNumber]?.pt}
                </div>
              </>
            )}
          </div>
          <div className="buttons">
            <div
              className={`button button-left ${onOff ? `powerOn` : ''}`}
              onClick={handleOnOff}
            >
              <FontAwesomeIcon icon={faPowerOff} />
            </div>
            <div className={`button button-right ${onOff ? `` : 'detailsOff'}  ${details && onOff ? `detailsOn` : ''}`} onClick={handleDetails}>Details</div>
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
              {/* Mengecilkan ukuran SVG dari 300x300 menjadi 200x200 */}
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
          <div className="dial" style={{ transform: `rotate(${projects[selectedNumber]?.rotate})`, transition: 'transform 0.5s ease' }}>
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
        <div className={`project-desc ${details ? `projectOn` : ''}`}>
          <div className="skills-container">
            <div className="skill-card">
              {onOff && (
                <>
                  <h3>Power Systems</h3>
                  <p>{projects[selectedNumber]?.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
        {activeModal && (
          <div
            className={`modal-overlay-projects ${activeModal ? 'active' : ''}`}
            onClick={handleOverlayClick}
          >
            <div className="modal-projects">
              <div className="modal-header-projects">
                <div className="modal-title-projects">
                  <FontAwesomeIcon icon={faListCheck} />
                  <span>Description</span>
                </div>
                <button className="close-button-projects" onClick={closeModal}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="modal-content-projects">
                {projects[selectedNumber]?.description}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects