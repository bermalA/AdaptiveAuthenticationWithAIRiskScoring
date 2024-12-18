'use client'
import './global.css'
import { useRouter } from 'next/navigation';

const sampleData = [
  {
    "index": 20038,
    "User ID": -922772247873,
    "Round-Trip Time [ms]": 285,
    "IP Address": 3110192865,
    "Country": 91,
    "ASN": 200665,
    "OS Name and Version": 89,
    "Device Type": 36,
    "Parsed Browser": 4,
    "City Change": 1,
    "Region Change": 1,
    "City Frequency": 5,
    "Region Frequency": 5,
    "RTT Normalization": 0.00826357472,
    "Login Success Ratio": 1,
    "Failed Attempts (10min)": 0,
    "Time Delta": 0,
    "Unusual Device": 1,
  },
];

export default function Home() {
  const router = useRouter();
  const handleNav = (path) =>{
    router.push(`/${path}`)
  }

  return (
    <div className="h-screen bg-gradient-to-r from-slate-800 to-slate-600 text-white flex flex-col justify-center items-center p-4">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Adaptive Authentication AI</h1>
        <p className="text-lg leading-relaxed">
          Adaptive Authentication AI is a smart system that enhances user security through dynamic risk scoring and behavior analysis. By integrating artificial intelligence, it ensures a seamless and secure user experience without compromising usability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-700 p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Key Features:</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Dynamic Risk Scoring</li>
              <li>Anomaly Detection</li>
              <li>Context-Aware Security</li>
              <li>User Behavior Analysis</li>
              <li>Visualization Dashboards</li>
            </ul>
          </div>
          <div className="bg-slate-700 p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Current Phase:</h2>
            <p className="mt-2">
              We're currently integrating Firebase Authentication and Storage to authenticate users and retrieve mock data for AI-driven analysis.
            </p>
          </div>
        </div>
        <div className='flex gap-2 justify-center'>
        <button 
        onClick={()=>handleNav('signup')}
        className="bg-blue-500 hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded mt-4">
          Sign up
        </button>
        <button 
        onClick={()=>{handleNav('login')}}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Login 
        </button>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
        </div>
      </div>
    </div>
  );
}
