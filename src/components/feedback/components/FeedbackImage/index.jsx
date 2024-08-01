import { Flex, Image } from "@chakra-ui/react";

const FeedbackImage = () => {
  return (
    <Flex flex={1} p={{ base: 6, md: 12 }} align="center" justify="center">
      <Image
        alt={"Login Image"}
        objectFit={"contain"}
        src={
          "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
      />
    </Flex>
  );
};

export default FeedbackImage;
