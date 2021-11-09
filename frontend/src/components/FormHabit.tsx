import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Input,
  Flex,
  useToast,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

const FormHabit = () => {
  const queryClient = useQueryClient();
  const [habit, setHabit] = useState('');
  const toast = useToast();

  const mutation = useMutation(
    async (newHabit) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return fetch('http://localhost:5000/api/v1/habit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHabit),
      });
    },
    {
      onSuccess: () => {
        toast({
          title: `To-Do creado!`,
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });
        queryClient.invalidateQueries('habit');
        setHabit('');
      },
    }
  );

  console.log(habit);
  return (
    <Box
      w="600px"
      borderWidth="1px"
      borderRight="lg"
      overflow="hidden"
      bg="white"
      padding="10"
      boxShadow="base"
      p="6"
      rounded="md"
      m={5}
    >
      <Flex alignItems="center" justifyContent="center">
        <FormControl id="habit" w="80%">
          <FormLabel>Crear Habit</FormLabel>
          <Input
            type="text"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
          />
          <Button
            mt="10"
            bg="#7928CA"
            _hover={{
              bg: '#9e47f5',
              fontWeight: '700',
            }}
            color="white"
            fontWeight="600"
            onClick={() => mutation.mutate({ description: habit })}
          >
            {mutation.isLoading
              ? 'wait...'
              : mutation.isError
              ? 'Ups! pincho'
              : 'Crear habit!'}
          </Button>
        </FormControl>
      </Flex>
    </Box>
  );
};

export default FormHabit;
