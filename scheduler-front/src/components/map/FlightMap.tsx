import React, { useEffect, useRef } from "react";
import RelationGraph, {
  RGJsonData,
  RGOptions,
  RelationGraphComponent,
  RGNodeSlotProps,
  JsonNode,
  JsonLine,
} from "relation-graph-react";
import "./flightMap.css";
import { Box, Card, Heading, Stat, Tooltip, VStack } from "@chakra-ui/react";

const FlightMap: React.FC<MapProps> = ({ schedules }) => {
  const graphRef = useRef<RelationGraphComponent | null>(null);

  const graphOptions: RGOptions = {
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    defaultLineColor: "rgba(238, 178, 94, 1)",
    defaultNodeColor: "transparent",
    defaultNodeBorderWidth: 3,
    defaultNodeBorderColor: "transparent",
    defaultNodeFontColor: "#ffffff",
    defaultNodeShape: 0,
    defaultPolyLineRadius: 10,
    lineUseTextPath: true,
    layout: {
      layoutName: "fixed",
    },
  };

  useEffect(() => {
    showGraph(schedules);
  }, [schedules]);

  const showGraph = async (schedules: Schedule[]) => {
    schedules = schedules
      .filter((val) => val.position < 100)
      .sort((a, b) => {
        return a.position - b.position;
      });

    const nodes: JsonNode[] = [];
    const lines: JsonLine[] = [];

    for (let index = 0; index < schedules.length; index++) {
      const schedule = schedules[index];

      let row = Math.trunc(index / 4);
      let col = index % 4;
      if (row % 2 === 1) {
        col = 3 - col;
      }

      nodes.push({
        id: schedule.id.toString(),
        text: schedule.flightNumber,
        x: col * 200,
        y: row * 200,
        data: {
          schedule: schedule,
        },
      });
    }

    for (let index = 1; index < nodes.length; index++) {
      const from = nodes[index - 1];
      const to = nodes[index];

      lines.push({
        from: from.id,
        to: to.id,
        text: (to.data?.schedule.position - from.data?.schedule.position).toFixed(2).toString(),
        animation: 1,
        lineShape: 1,
      });
    }

    const graphData: RGJsonData = {
      rootId: nodes[0].id,
      nodes: nodes,
      lines: lines,
    };

    const graphInstance = graphRef.current?.getInstance();
    await graphInstance?.setJsonData(graphData);
    await graphInstance?.moveToCenter();
    await graphInstance?.zoomToFit();
  };

  const NodeSlot: React.FC<RGNodeSlotProps> = ({ node }) => {
    return (
      <div>
        <Tooltip.Root openDelay={200}>
          <Tooltip.Trigger disabled>
            <Heading>{node.text}</Heading>
          </Tooltip.Trigger>
          <Tooltip.Positioner>
            <Tooltip.Content w={"fit-content"}>
              <Card.Root>
                <Card.Header>
                  <Heading>{node.text} 항공편</Heading>
                </Card.Header>
                <Card.Body w={"fit-content"}>
                  <VStack alignItems={"flex-start"}>
                    <Stat.Root>
                      <Stat.Label>Position</Stat.Label>
                      <Stat.HelpText>현재 위치</Stat.HelpText>
                      <Stat.ValueText fontSize={"lg"}>
                        현재 {node.data?.schedule.position.toFixed(2)}% 지점 지나는 중...
                      </Stat.ValueText>
                    </Stat.Root>
                    <Stat.Root>
                      <Stat.Label>Departure</Stat.Label>
                      <Stat.HelpText>출발 시간</Stat.HelpText>
                      <Stat.ValueText fontSize={"lg"}>
                        {node.data?.schedule.adjustedDeparture.toUTCString()}
                      </Stat.ValueText>
                    </Stat.Root>
                    <Stat.Root>
                      <Stat.Label>Arrival</Stat.Label>
                      <Stat.HelpText>예상 도착 시간</Stat.HelpText>
                      <Stat.ValueText fontSize={"lg"}>
                        {node.data?.schedule.adjustedArrival.toUTCString()}
                      </Stat.ValueText>
                    </Stat.Root>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Tooltip.Root>
      </div>
    );
  };

  return (
    <Box h={"100%"}>
      <RelationGraph ref={graphRef} options={graphOptions} nodeSlot={NodeSlot} />
    </Box>
  );
};
export default FlightMap;
