import React,{useEffect } from 'react';

export function Docs() {
  return (
    <div>
    <Mermaid chart={`
        graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    `}/>

    <iframe width="500" height="500" class="ne-thirdparty-iframe" data-testid="ne-thirdparty-reader-iframe" sandbox="allow-forms allow-orientation-lock allow-presentation allow-same-origin allow-scripts allow-popups allow-downloads" data-src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fr8Ibwbo7I095uZB2dA53v7%2FElement-UI-Kit-2.15.7-(Community)%3Fnode-id%3D30214%253A86039" frameborder="0" allowfullscreen="" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fr8Ibwbo7I095uZB2dA53v7%2FElement-UI-Kit-2.15.7-(Community)%3Fnode-id%3D30214%253A86039"></iframe>
      <h1>222 Replacing DocsPage with a custom component</h1>
      <p>
       Write your own code here👇
      </p>
    </div>
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