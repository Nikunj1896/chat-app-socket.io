import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { Flex } from '@chakra-ui/react'

const UserListItem = ({ handleFunction , userItem}) => {

  return (
    <Flex
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={userItem.name}
      />
      <Box>
        <Text>{userItem.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {userItem.email}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserListItem;
