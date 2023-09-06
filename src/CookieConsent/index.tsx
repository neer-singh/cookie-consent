import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './CookieConsent.css'; 
import CustomSwitch from '../CustomSwitch'; 
interface Cookie {
  name: string;
  type: string;
  description: string;
}

interface CookieConsentProps {
  cookies: Cookie[];
}

const CookieConsent: React.FC<CookieConsentProps> = ({ cookies }) => {
  const [showModal, setShowModal] = useState(false);
  const [cookieState, setCookieState] = useState<{ [name: string]: boolean }>(
    {}
  );
  const [activeTab, setActiveTab] = useState<string>('essential');

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const toggleCookie = (cookieName: string, checked: boolean) => {
    setCookieState((prevState) => ({
      ...prevState,
      [cookieName]: checked,
    }));
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Open Cookie Consent
      </Button>

      <Modal show={showModal} onHide={handleClose} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Cookie Setting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            activeKey={activeTab}
            onSelect={(tab: any) => setActiveTab(tab)}>
            <Tab eventKey='essential' title='Essential'>
              {cookies
                .filter((cookie) => cookie.type === 'Essential')
                .map((cookie, index) => (
                  <>
                    <div
                      className={`d-flex justify-content-between w-100 pb-3 ${
                        index === 0 ? 'pt-3' : ''
                      }`}>
                      <span className='small'>
                        <strong>Name : </strong>
                        <span className='text-muted'>{cookie.name}</span>
                      </span>
                      <CustomSwitch
                        key={index}
                        name={cookie.name}
                        checked={cookieState[cookie.name] || false}
                        onChange={(checked) =>
                          toggleCookie(cookie.name, checked)
                        }
                      />
                    </div>
                    <span className='small dotted'>
                      <strong>Description : </strong>
                      <span className='text-muted'>{cookie.description}</span>
                    </span>
                    <hr className='dotted' />
                  </>
                ))}
                </Tab>
            <Tab eventKey='performance' title='Performance'>
              {cookies
                .filter((cookie) => cookie.type === 'Performance')
                .map((cookie, index) => (
                  <>
                    <div
                      className={`d-flex justify-content-between w-100 pb-3 ${
                        index === 0 ? 'pt-3' : ''
                      }`}>
                      <span className='small'>
                        <strong>Name : </strong>
                        <span className='text-muted'>{cookie.name}</span>
                      </span>
                      <CustomSwitch
                        key={index}
                        name={cookie.name}
                        checked={cookieState[cookie.name] || false}
                        onChange={(checked) =>
                          toggleCookie(cookie.name, checked)
                        }
                      />
                    </div>
                    <span className='small dotted'>
                      <strong>Description : </strong>
                      <span className='text-muted'>{cookie.description}</span>
                    </span>
                    <hr className='dotted' />
                  </>
                ))}
                </Tab>
            <Tab eventKey='analytics' title='Analytics'>
              {cookies
                .filter((cookie) => cookie.type === 'Analytics')
                .map((cookie, index) => (
                  <>
                    <div
                      className={`d-flex justify-content-between w-100 pb-3 ${
                        index === 0 ? 'pt-3' : ''
                      }`}>
                      <span className='small'>
                        <strong>Name : </strong>
                        <span className='text-muted'>{cookie.name}</span>
                      </span>
                      <CustomSwitch
                        key={index}
                        name={cookie.name}
                        checked={cookieState[cookie.name] || false}
                        onChange={(checked) =>
                          toggleCookie(cookie.name, checked)
                        }
                      />
                    </div>
                    <span className='small dotted'>
                      <strong>Description : </strong>
                      <span className='text-muted'>{cookie.description}</span>
                    </span>
                    <hr className='dotted' />
                  </>
                ))}
            </Tab>
            <Tab eventKey='marketing' title='Marketing'>
              {cookies
                .filter((cookie) => cookie.type === 'Marketing')
                .map((cookie, index) => (
                  <>
                    <div
                      className={`d-flex justify-content-between w-100 pb-3 ${
                        index === 0 ? 'pt-3' : ''
                      }`}>
                      <span className='small'>
                        <strong>Name : </strong>
                        <span className='text-muted'>{cookie.name}</span>
                      </span>
                      <CustomSwitch
                        key={index}
                        name={cookie.name}
                        checked={cookieState[cookie.name] || false}
                        onChange={(checked) =>
                          toggleCookie(cookie.name, checked)
                        }
                      />
                    </div>
                    <span className='small dotted'>
                      <strong>Description : </strong>
                      <span className='text-muted'>{cookie.description}</span>
                    </span>
                    <hr className='dotted' />
                  </>
                ))}
                </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CookieConsent;
