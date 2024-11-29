import { Box, Card, Text, VStack, Slider, Flex, Stat, HStack, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { getScheduleParams, updateScheduleParams } from "../../../api/scheduleParams";
import { dummy } from "../../../config/config";

const Setting: React.FC<{}> = () => {
  const [scheduleParams, setScheduleParams] = useState<ScheduleParams>(dummy.scheduleParams);

  /*========================================================================*/

  const handleRiskAlpha = (ratio: number) => {
    setScheduleParams({
      ...scheduleParams,
      riskAlpha: ratio,
    });
  };

  const handleCancelCost = (isUp: boolean) => {
    if (isUp) {
      setScheduleParams({
        ...scheduleParams,
        cancelCost: scheduleParams.cancelCost + 1,
      });
    } else if (!isUp && scheduleParams.cancelCost > 0) {
      setScheduleParams({
        ...scheduleParams,
        cancelCost: scheduleParams.cancelCost - 1,
      });
    }
  };

  const handleDelayCost = (isUp: boolean) => {
    if (isUp) {
      setScheduleParams({
        ...scheduleParams,
        delayCost: scheduleParams.delayCost + 1,
      });
    } else if (!isUp && scheduleParams.delayCost > 0) {
      setScheduleParams({
        ...scheduleParams,
        delayCost: scheduleParams.delayCost - 1,
      });
    }
  };

  /*========================================================================*/

  useEffect(() => {
    getScheduleParams(setScheduleParams);
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
            <Card.Title>Cost</Card.Title>
            <Card.Description>취소 / 지연에 따른 패널티 값을 설정합니다.</Card.Description>
          </Card.Header>
          <Card.Body>
            <Flex>
              <Stat.Root w={"50%"}>
                <Stat.Label>Cancel Cost / 취소 비용</Stat.Label>
                <Stat.ValueText>
                  <HStack gap={3}>
                    <Button onClick={() => handleCancelCost(true)}>
                      <FiPlus />
                    </Button>
                    <Text>{scheduleParams.cancelCost} $</Text>
                    <Button onClick={() => handleCancelCost(false)}>
                      <FiMinus />
                    </Button>
                  </HStack>
                </Stat.ValueText>
              </Stat.Root>
              <Stat.Root w={"50%"}>
                <Stat.Label>Delay Cost / 지연 비용</Stat.Label>
                <Stat.ValueText>
                  <HStack gap={3}>
                    <Button onClick={() => handleDelayCost(true)}>
                      <FiPlus />
                    </Button>
                    <Text>{scheduleParams.delayCost} $</Text>
                    <Button onClick={() => handleDelayCost(false)}>
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
              <Slider.Root
                {...sliderStyleProps}
                value={[scheduleParams.riskAlpha]}
                onValueChange={(e) => handleRiskAlpha(e.value[0])}
              >
                <Slider.Label>
                  <Flex justifyContent={"space-between"}>
                    <Text>Risk / 위험도의 중요도</Text>
                    <Text>{scheduleParams.riskAlpha}</Text>
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
            <Button
              _hover={{ color: "blue.300" }}
              onClick={() => updateScheduleParams(scheduleParams, setScheduleParams)}
            >
              Apply / 적용하기
            </Button>
            <Button _hover={{ color: "red.300" }} onClick={() => getScheduleParams(setScheduleParams)}>
              Reset / 되돌리기
            </Button>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Setting;
