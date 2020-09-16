import React from 'react';

import { Modal } from 'antd';

import {
  Heading,
  InputRow,
  InputIcon,
  Input,
  InputTel,
  Form,
  Select,
  CloseIcon
 } from './styles';
 import './styles.css';

import { useForm } from '../../hooks/useForm';

 //com.
 import PrimaryButton from '../../components/PrimaryButton';
 import SpinnerSmall from '../../components/SpinnerSmall';
 import LeadModalAlertSuccess from '../../components/LeadModalAlertSuccess';
 // img.
 import IconEdit from '../../assets/icons/edit-1.png';
 import IconPhone from '../../assets/icons/phone-1.png';
 import IconEmail from '../../assets/icons/email.png';
 import IconSelect from '../../assets/icons/select.svg';
 import IconClose from '../../assets/icons/close.svg';

//Custom Styles
const customBodyStyle = {
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#E5E5E5',
  opacity: '1',
  borderBottom: 'none',
};

const LeadModalContainer = ({ open, callback }) => {
  const {
    error,
    success,
    loading,
    inputs,
    handleSubmit,
    handleChange
  } = useForm();

  var patterns = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  return (
    <>
      <Modal
        centered
        visible={open}
        bodyStyle={customBodyStyle}
        closable={false}
      >
        {
          success ? (
            <LeadModalAlertSuccess closeCallback={() => callback()} />
            ) : (
            <Form onSubmit={handleSubmit}>
              <CloseIcon onClick={() => callback()}>
                <img src={IconClose} alt="..." />
              </CloseIcon>
              <Heading>Fill in an application</Heading>
              <InputRow>
                <InputIcon><img src={IconEdit} alt="icon" /></InputIcon>
                <Input
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  maxLength={20}
                  onChange={handleChange}
                  value={inputs.name}
                  required
                />
              </InputRow>
              <InputRow>
                <InputIcon><img src={IconPhone} alt="icon" /></InputIcon>
                <InputTel
                  type="tel" 
                  name="phone_number" 
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={inputs.phone_number}
                  mask={['(', '+', /9/, /9/, /8/, ')', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                  required
                />
              </InputRow>
              <InputRow>
                <InputIcon><img src={IconEmail} alt="icon" /></InputIcon>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  onChange={handleChange}
                  value={inputs.email}
                  pattern={patterns}
                  required
                />
              </InputRow>
              <InputRow>
                <InputIcon><img src={IconSelect} alt="icon" /></InputIcon>
                <Select 
                  type="select" 
                  name="course" 
                  onChange={handleChange}
                  value={inputs.course}
                  required
                >
                  <option selected="selected" hidden>Choose the Course...</option>
                  <option value="1">Frontend development</option>
                  <option value="2">Backend development</option>
                  <option value="3">UI/UX design</option>
                </Select>
              </InputRow>
              <InputRow>
                <PrimaryButton formBtn>
                  {
                    !error && loading ? (<SpinnerSmall />) : ('Submit')
                  }
                </PrimaryButton>
              </InputRow>
            </Form>
          )
        }
      </Modal>
    </>
  )
};

export default LeadModalContainer;