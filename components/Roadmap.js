import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from '../styles/Home.module.css'

function Roadmap() {
  const [stage, setStage] = useState(1)
  const stages = [
    {
      name: 'Design and Development',
      desc: 'This stage involves creating the technical design and architecture of the protocol, and begins the implementation of the code. Our development team will be working on building the smart contracts and infrastructure necessary for the protocol to function.'
    },
    {
      name: 'Testing and Auditing',
      desc: 'Once the protocol is developed, it will be thoroughly tested to ensure that it functions as intended and is free of bugs. Additionally, we will also engage an independent auditing firm to perform a security audit of the code to ensure that it is secure.'
    },
    {
      name: 'Legal and Regulatory Compliance',
      desc: 'The protocol will be reviewed by legal experts to ensure that it complies with all relevant laws and regulations. This stage is crucial in order to avoid any potential legal issues and ensure the longevity of our platform.'
    },
    {
      name: 'Prototype and Beta Release',
      desc: 'In this stage, a working prototype of the protocol will be developed, which will be tested with a small group of beta testers to gather feedback and identify any issues that need to be addressed before public release.'
    },
    {
      name: 'Investor Acquisition',
      desc: ' This stage will involve obtaining funding from investors to help with development and marketing efforts, as well as recruiting additional team members.'
    },
    {
      name: 'Public Release',
      desc: 'The final stage, in which the protocol will be publicly released and made available for use.'
    }
  ]


  const progressSpring = useSpring({
    width: `${(stage / stages.length) * 100}%`,
    config: { mass: 1, tension: 280, friction: 80 }
  })
  
  return (
    <><div className={`text-center flex flex-col items-center ${styles.left} m-10 text-center border-2 rounded-3xl`}>
      <h2 className="text-xl font-medium">Roadmap</h2>
      <p className={` text-lg font-light`}>Our roadmap details the steps we're taking to bring our innovative idea of tokenizing debt on the blockchain to fruition. From development and testing, to legal and regulatory compliance, and finally, to expanding our team and obtaining investors. Follow our progress as we work towards creating a more accessible, transparent, and efficient market for debt investments.</p>
    </div><div className="relative w-full md:w-3/4 lg:w-1/2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
            <p className="text-sm font-medium text-gray-600">Current Stage</p>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-gray-500 mr-2"></div>
            <p className="text-sm font-medium text-gray-600">Upcoming Stage</p>
          </div>
        </div>
        <div className="relative h-2 mt-2 rounded-full bg-gray-200">
          <animated.div className="absolute top-0 left-0 h-2 rounded-full bg-green-500" style={progressSpring}></animated.div>
        </div>
        <div className="flex justify-between items-center mt-2">

          <p className="text-sm font-medium text-gray-600">Stage 1</p>
          <p className="text-sm font-medium text-gray-600">Stage 6</p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white mr-2" onClick={() => setStage(stage - 1)} disabled={stage === 1}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <p className="text-lg font-medium text-gray-600">Stage {stage}</p>
          <button className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500 text-white ml-2" onClick={() => setStage(stage + 1)} disabled={stage === stages.length}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div className="mt-8">
          {stages.map((stageName, index) => (
            <div key={stageName} className={`relative ${index < stage ? 'bg-green-200' : 'bg-gray-200'} rounded-lg`}>
              <div className={`absolute top-0 left-0 -ml-2 -mt-2 rounded-full h-6 w-6 bg-white ${index === 0 ? 'text-green-500' : 'text-gray-500'}`}>
                <div className="flex items-center justify-center h-full text-xs font-medium">{index + 1}</div>
              </div>

              <div className={`px-4 py-2 rounded-lg ${index < stage ? 'text-green-500' : 'text-gray-500'}`}>
                <h3 className="text-lg font-bold text-gray-600">{stageName.name}</h3>
                <p className="text-sm font-light text-gray-600">{stageName.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div></>
)
}

export default Roadmap