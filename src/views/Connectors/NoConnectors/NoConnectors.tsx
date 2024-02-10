import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import NoSourcesImage from "@/assets/images/NoSources.png";
import NoDestinationsImage from "@/assets/images/NoDestinations.png";
import { useNavigate } from "react-router-dom";

type NoConnectorsProps = {
  connectorType: string;
};

const NoConnectors = ({ connectorType }: NoConnectorsProps): JSX.Element => {
  const navigate = useNavigate();

  const type = connectorType === "source" ? "Source" : "Destination";
  const description =
    connectorType === "source"
      ? "Add a destination where your data will be sent"
      : "Configure a source where your data is stored and managed";

  const image =
    connectorType === "source" ? NoSourcesImage : NoDestinationsImage;

  return (
    <Flex
      width="100%"
      height="100vh"
      alignContent="center"
      justifyContent="center"
    >
      <Center>
        <VStack spacing={8}>
          <VStack>
            <Image src={image} />
            <Heading size="xs">No {type}s added</Heading>
            <Text size="sm">{description} </Text>
          </VStack>
          <Button
            onClick={() => navigate("new")}
            leftIcon={<FiPlus />}
            variant="solid"
            w="fit"
          >
            Add {type}
          </Button>
        </VStack>
      </Center>
    </Flex>
  );
};

export default NoConnectors;
