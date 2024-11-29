import React, { useEffect, useRef } from "react";
import RelationGraph, {
  RGJsonData,
  RGOptions,
  RGNode,
  RGLine,
  RGLink,
  RGUserEvent,
  RelationGraphComponent,
  RGNodeSlotProps,
} from "relation-graph-react";
// import CircumIcon from "./RGDemoComponents/MyDemoIcons";
import "./flightMap.css";
import { Box, Heading } from "@chakra-ui/react";

const LineStyle1 = () => {
  const graphRef = useRef<RelationGraphComponent | null>(null);

  const graphOptions: RGOptions = {
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: true,
    defaultLineColor: "rgba(255, 255, 255, 0.6)",
    defaultNodeColor: "transparent",
    defaultNodeBorderWidth: 0,
    defaultNodeBorderColor: "transparent",
    defaultNodeFontColor: "#ffffff",
    defaultNodeShape: 0,
    toolBarDirection: "h",
    toolBarPositionH: "right",
    toolBarPositionV: "bottom",
    defaultPolyLineRadius: 10,
    defaultLineShape: 6,
    defaultJunctionPoint: "lr",
    lineUseTextPath: true,
    layout: {
      layoutName: "tree",
      from: "left",
      min_per_width: 310,
      min_per_height: 70,
    },
  };

  useEffect(() => {
    showGraph();
  }, []);

  const showGraph = async () => {
    const __graph_json_data: RGJsonData = {
      rootId: "a",
      nodes: [
        { id: "a", text: "a", data: { icon: "football" } },
        { id: "b", text: "b", data: { icon: "fries" } },
        { id: "b1", text: "b1", data: { icon: "fries" } },
        { id: "b2", text: "b2", data: { icon: "fries" } },
        { id: "b2-1", text: "b2-1", data: { icon: "fries" } },
        { id: "b2-2", text: "b2-2", data: { icon: "fries" } },
        { id: "c", text: "c", data: { icon: "delivery_truck" } },
        { id: "c1", text: "c1", data: { icon: "delivery_truck" } },
        { id: "c2", text: "c2", data: { icon: "delivery_truck" } },
        { id: "c3", text: "c3", data: { icon: "delivery_truck" } },
      ],
      lines: [
        { from: "a", to: "b", text: "虚线1", dashType: 1 },
        { from: "b", to: "b1", text: "虚线2", dashType: 2 },
        { from: "b", to: "b2", text: "虚线3", dashType: 3 },
        { from: "b2", to: "b2-1", text: "虚线4", dashType: 4 },
        { from: "b2", to: "b2-2", text: "正常线条" },
        { from: "a", to: "c", text: "线条动画1", animation: 1 },
        { from: "c", to: "c1", text: "线条动画2", animation: 2 },
        { from: "c", to: "c2", text: "线条动画3", animation: 3 },
        { from: "c", to: "c3", text: "线条动画4", animation: 4 },
      ],
    };

    const graphInstance = graphRef.current?.getInstance();
    await graphInstance?.setJsonData(__graph_json_data);
    await graphInstance?.moveToCenter();
    await graphInstance?.zoomToFit();
  };

  const NodeSlot: React.FC<RGNodeSlotProps> = ({ node }) => {
    return (
      <div className="c-round" style={{ width: "70px", height: "70px" }}>
        <Heading>{node.id}</Heading>
      </div>
    );
  };

  return (
    <Box h={"100%"}>
      <RelationGraph ref={graphRef} options={graphOptions} nodeSlot={NodeSlot} />
    </Box>
  );
};
export default LineStyle1;
