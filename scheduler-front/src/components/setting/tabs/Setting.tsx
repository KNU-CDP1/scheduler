import { Box, Card, Text, VStack, Slider, Flex, Stat, HStack, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Setting: React.FC<{}> = () => {
  // importance
  // const [cancelCostRatio, setCancelCostRatio] = useState<number>(20);
  // const [delayCostRatio, setDelayCostRatio] = useState<number>(20);
  const [riskRatio, setRiskRatio] = useState<number>(20);

  // penalty
  const [cancelPenalty, setCancelPenalty] = useState<number>(20);
  const [delayPenalty, setDelayPenalty] = useState<number>(20);

  const handleCancelPenalty = (isUp: boolean) => {
    if (isUp) {
      setCancelPenalty(cancelPenalty + 1);
    } else if (!isUp && cancelPenalty > 0) {
      setCancelPenalty(cancelPenalty - 1);
    }
  };

  const handleDelayPenalty = (isUp: boolean) => {
    if (isUp) {
      setDelayPenalty(delayPenalty + 1);
    } else if (!isUp && delayPenalty > 0) {
      setDelayPenalty(delayPenalty - 1);
    }
  };

  useEffect(() => {
    // TODO: API
  }, []);

  /*========================================================================*/

  const sliderStyleProps = {
    w: "100%",
    step: 1,
    min: 0,
    max: 100,
  };

  /*========================================================================*/

  return (
    <Box w={"100%"}>
      <VStack w={"100%"} mt={"10px"} gap={6} className={"dark"}>
        <Card.Root w={"100%"} variant={"outline"}>
          <Card.Header>
            <Card.Title>Penalty</Card.Title>
            <Card.Description>취소 / 지연에 따른 패널티 값을 설정합니다.</Card.Description>
          </Card.Header>
          <Card.Body>
            <Flex>
              <Stat.Root w={"50%"}>
                <Stat.Label>Cancel Penalty / 취소 비용</Stat.Label>
                <Stat.ValueText>
                  <HStack gap={3}>
                    <Button onClick={() => handleCancelPenalty(true)}>
                      <FiPlus />
                    </Button>
                    <Text>{cancelPenalty} $</Text>
                    <Button onClick={() => handleCancelPenalty(false)}>
                      <FiMinus />
                    </Button>
                  </HStack>
                </Stat.ValueText>
              </Stat.Root>
              <Stat.Root w={"50%"}>
                <Stat.Label>Delay Penalty / 지연 비용</Stat.Label>
                <Stat.ValueText>
                  <HStack gap={3}>
                    <Button onClick={() => handleDelayPenalty(true)}>
                      <FiPlus />
                    </Button>
                    <Text>{delayPenalty} $</Text>
                    <Button onClick={() => handleDelayPenalty(false)}>
                      <FiMinus />
                    </Button>
                  </HStack>
                </Stat.ValueText>
              </Stat.Root>
            </Flex>
          </Card.Body>
        </Card.Root>
        <Card.Root w={"100%"} variant={"outline"}>
          <Card.Header>
            <Card.Title>Importance</Card.Title>
            <Card.Description>비용 계산 요소의 중요도를 설정합니다.</Card.Description>
          </Card.Header>
          <Card.Body>
            <VStack w={"100%"} gap={4}>
              {/* <Slider.Root
                {...sliderStyleProps}
                value={[cancelCostRatio]}
                onValueChange={(e) => setCancelCostRatio(e.value[0])}
              >
                <Slider.Label>
                  <Flex justifyContent={"space-between"}>
                    <Text>Cancel Cost / 일정 취소 비용의 중요도</Text>
                    <Text>{cancelCostRatio}</Text>
                  </Flex>
                </Slider.Label>
                <Slider.Control>
                  <Slider.Track bg={"gray.600"}>
                    <Slider.Range bg={"gray.200"}></Slider.Range>
                  </Slider.Track>
                  <Slider.Thumb index={0} bg={"gray.200"}>
                    <Slider.HiddenInput />
                  </Slider.Thumb>
                </Slider.Control>
              </Slider.Root>
              <Slider.Root
                {...sliderStyleProps}
                value={[delayCostRatio]}
                onValueChange={(e) => setDelayCostRatio(e.value[0])}
              >
                <Slider.Label>
                  <Flex justifyContent={"space-between"}>
                    <Text>Delay Cost / 일정 지연 비용의 중요도</Text>
                    <Text>{delayCostRatio}</Text>
                  </Flex>
                </Slider.Label>
                <Slider.Control>
                  <Slider.Track bg={"gray.600"}>
                    <Slider.Range bg={"gray.200"}></Slider.Range>
                  </Slider.Track>
                  <Slider.Thumb index={0} bg={"gray.200"}>
                    <Slider.HiddenInput />
                  </Slider.Thumb>
                </Slider.Control>
              </Slider.Root> */}
              <Slider.Root {...sliderStyleProps} value={[riskRatio]} onValueChange={(e) => setRiskRatio(e.value[0])}>
                <Slider.Label>
                  <Flex justifyContent={"space-between"}>
                    <Text>Risk / 위험도의 중요도</Text>
                    <Text>{riskRatio}</Text>
                  </Flex>
                </Slider.Label>
                <Slider.Control>
                  <Slider.Track bg={"gray.600"}>
                    <Slider.Range bg={"gray.200"}></Slider.Range>
                  </Slider.Track>
                  <Slider.Thumb index={0} bg={"gray.200"}>
                    <Slider.HiddenInput />
                  </Slider.Thumb>
                </Slider.Control>
              </Slider.Root>
            </VStack>
          </Card.Body>
        </Card.Root>
        <Flex w={"100%"} justifyContent={"flex-end"}>
          <HStack>
            <Button _hover={{ color: "blue.300" }}>Apply / 적용하기</Button>
            <Button _hover={{ color: "red.300" }}>Reset / 되돌리기</Button>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Setting;
