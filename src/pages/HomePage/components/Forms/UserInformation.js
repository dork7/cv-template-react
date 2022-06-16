import {
  Box,
  Flex,
  Input,
  Text,
  chakra,
  Button,
  Select,
  Checkbox,
  HStack,
  Textarea,
} from '@chakra-ui/react';
import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/InputField';
import moment from 'moment';
import { useReadWriteJSON } from '../../hooks/readWriteJSON';

const ChakraDatePicker = chakra(DatePicker);

const UserInformation = () => {
  const { getUserData, writeUserData } = useReadWriteJSON();
  const [date, setDate] = useState(new Date());
  const [submittedMsg, setSubmittedMsg] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log('data', data);
    writeUserData(data);
    setTimeout(() => {
      setSubmittedMsg('Form Submitted');
    }, 500);
  };

  useEffect(() => {
    // console.log('errors', errors);
    register('date');
  }, []);

  const onDateChange = (date) => {
    setValue('date', date.format());
  };

  return (
    <chakra.form onSubmit={handleSubmit(formSubmit)} id="chakra-form">
      <Flex wrap={'wrap'}>
        <InputField
          label={'Name'}
          {...{ register, errors }}
          value="name"
          required
        />
        <InputField
          label={'Email'}
          {...{ register, errors }}
          value="email"
          required
        />
        <InputField
          label={'Phone'}
          {...{ register, errors }}
          value="phone"
          required
        />
        <Flex direction="column" flex="1 0 300px" p={2}>
          <Text>Select Options</Text>
          <Select placeholder="Select option" id="select-box">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>

        <Flex direction="column" flex="1 0 300px" p={2}>
          <Text>Checkbox</Text>
          <HStack id="checkbox-flex">
            <Checkbox id="check1" value="checkbox1">
              Checkbox 1
            </Checkbox>
            <Checkbox id="check2" value="checkbox2">
              Checkbox 2
            </Checkbox>
            <Checkbox id="check3" value="checkbox3">
              Checkbox 3
            </Checkbox>
          </HStack>
        </Flex>
        <Flex direction="column" flex="1 0 300px" p={2}>
          <Text>Pick a date</Text>
          <ChakraDatePicker
            id="date-picker"
            defaultValue={moment()}
            // {...register('date')}
            onChange={onDateChange}
          />
        </Flex>
      </Flex>
      <Flex direction="column" flex="1 0 300px" p={2}>
        <Text>Text Area</Text>
        <Textarea
          id="text-area"
          {...register('description', {
            required: `Description is required`,
          })}
        />
      </Flex>

      <Button type="submit" w="full" id="form-submit-btn" p={2}>
        {' '}
        Save{' '}
      </Button>
      <Text id="is-submitted">{submittedMsg}</Text>
    </chakra.form>
  );
};

export default UserInformation;
