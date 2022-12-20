import React,{useEffect } from 'react';

export function TreeReviseRequistion() {
  return (
    <Mermaid chart={`
    flowchart TD
    subgraph 移除修订记录 & 提交修订申请单 & 查询当前修订申请单 & 查询历史修订申请单
    A["view"]
    A--xD[ReviseRequistionTable]
    A--xE[ReviseTableRouterIcon]
    A--xC[ReviseRequistionReviseRecordTable]
    A--xB[ReviseRecordReviewTable]
    end
    `}/>
  );
}



const DEFAULT_CONFIG = {
    startOnLoad: true,
    theme: "forest",
    logLevel: "fatal",
    securityLevel: "strict",
    arrowMarkerAbsolute: false,
    flowchart: {
      htmlLabels: true,
      curve: "linear",
    },
    sequence: {
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      mirrorActors: true,
      bottomMarginAdj: 1,
      useMaxWidth: true,
      rightAngles: false,
      showSequenceNumbers: false,
    },
    gantt: {
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      fontFamily: '"Open-Sans", "sans-serif"',
      numberSectionStyles: 4,
      axisFormat: "%Y-%m-%d",
    },
  }
  
  const Mermaid = ({ name, chart, config }) => {
    
    // Mermaid initilize its config
    mermaid.initialize({...DEFAULT_CONFIG, ...config})
  
    useEffect(() => {
      mermaid.contentLoaded()
    }, [config])
  
    if (!chart) return null
    return (
      <div className="mermaid" name={name}>
        {chart}
      </div>
    )
  
    
    
  }