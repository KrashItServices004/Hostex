import React, { useState } from 'react'
import Dcma from './Dcma';
import Trademark from './Trademark';
import Spam from './Spam';
import Phishing from './Phishing';
import Malware from './Malware';
import Botnet from './Botnet';
import Other from './Other';
import ViolentThreats from './ViolentThreats';
import ChildAbuse from './ChildAbuse';
import Intrusion from './Intrusion';

const MultiAccordion = () => {
  const [accordionItems, setAccordionItems] = useState([
    { id: 1, title: 'DMCA Takedown', content: 'DMCA—is a federal law that helps copyright holders.', isOpen: false },
    { id: 2, title: 'Trademark Infringement', content: ' Trademark abuse is the unauthorized use of a trademark in connection with services in a way that is likely to cause confusion about the source of the goods or services.', isOpen: false },
    { id: 3, title: 'Spam', content: 'Spam is Unsolicited Bulk Email distributed to recipients who have not provided direct consent.', isOpen: false },
    { id: 4, title: 'Phishing', content: 'Phishing is the fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information.', isOpen: false },
    { id: 5, title: 'Malware', content: 'Malware is software that is intended to damage or disable computers and computer systems.', isOpen: false },
    { id: 6, title: 'Botnet', content: 'A botnet is a network of private computers infected with malicious software and controlled as a group without the owners knowledge.', isOpen: false },
    { id: 7, title: 'Intrusion/exploit attempts (Bruteforce, Scans etc)', content: 'Intrusion/exploit attempts (Bruteforce, Scans etc) attacks are when malicious applications makes several attempts to access, crack, or locate vulnerabilities on machines they have no right accessing. This is a technique commonly employed by malicious actors in order to find an attack vector to utilize against a server/website.', isOpen: false },
    { id: 8, title: 'Child Abuse', content: 'Child Abuse is physical maltreatment or sexual molestation of a child.', isOpen: false },
    { id: 9, title: 'Violent Threats and Harassment', content: 'Violent threats and harassment are any sort of content pertaining to intent to harm a person(s). These can be threats of physical altercation or content to cause emotional distress.', isOpen: false },
    { id: 10, title: 'Other', content: 'Please utilize this form to provide HostX with evidence of any abuse outside of our categories listed.', isOpen: false },
  ]);

  const handleToggle = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };

  return (
    <div className="accordion" id="customAccordion">
      {accordionItems.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <p className="accordion-header" id={`accordionHeader${item.id}`}>
            <button
              className={`accordion-button ${item.isOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={item.isOpen}
              aria-controls={`accordionContent${item.id}`}
            >
              {item.isOpen ? <span className='fs-4'>-</span> : <span className='fs-4'>+</span>}
              
             <div className='ps-3'>  {item.title} <br/>
              {item.content}</div>
               
            </button>
          </p>
          <div
            id={`accordionContent${item.id}`}
            className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
            aria-labelledby={`accordionHeader${item.id}`}
          >
            <div className="accordion-body">
              {
                item.title === "DMCA Takedown" ? <Dcma /> : ""
              }
              {
                item.title === "Trademark Infringement" ? <Trademark /> : ""
              }
              {
                item.title === "Spam" ? <Spam /> : ""
              }
              {
                item.title === "Phishing" ? <Phishing /> : ""
              }
              {
                item.title === "Malware" ? <Malware /> : ""
              }
              {
                item.title === "Botnet" ? <Botnet /> : ""
              }
              {
                item.title === "Intrusion/exploit attempts (Bruteforce, Scans etc)" ?<Intrusion/>:""
              }
              {
                item.title === "Child Abuse" ? <ChildAbuse /> : ""
              }
              {
                item.title === "Violent Threats and Harassment" ? <ViolentThreats /> : ""
              }
              {
                item.title === "Other" ? <Other /> : ""
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiAccordion
