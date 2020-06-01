import React, {useState, useEffect} from "react"
import Header from "./Header"
import KPI from "./KPI"
import Chart from "./Chart"
import Writeup from "./Writeup"
import Footer from "./Footer"
import ColorLegend from "./ColorLegend"
import {csv} from 'd3'
import moment from 'moment'
import {getBody} from "../getBody.js"

const App = () => {
	const [totalData, setData] = useState("")
	const [sankeyData, setSankeyData] = useState("")
	const [allApps, setAllApps] = useState(0)
	const [totalReponse, setTotalReponse] = useState(0)
	const [referralRate, setReferral] = useState(0)
	const [WLRate, setWL] = useState(0)
	const [tuftsRate, setTufts] = useState(0)
	const [status, setStatus] = useState("")
	const [currentDate, setDate] = useState("")
	const numActiveInterviews = 2

	

	useEffect(() => {
		//set header information
		setDate(moment().format('MM/DD/YYYY'))
		//can be: Applying, Interviewing, Accepted, Shelved
		let accepted = false
		if(numActiveInterviews > 0) { 
			setStatus("Interviewing")
		}
		else {
			accepted ? setStatus("Accepted") : setStatus("Applying")
		}

		//get data for kpis

		const calculateValues = data => {
			let allApps = 0
			let cumRes = 0
			let rRate = 0
			let wlRate = 0
			let tRate = 0
			
			allApps += parseInt(data["Total LinkedIn"],10) + parseInt(data["Total Website"],10) + parseInt(data["Total Referral"],10) + parseInt(data["Total Tufts"],10)
	
			cumRes = Number(data["Total Response Rate"]) * 100
			cumRes = cumRes.toFixed(2)
			cumRes += '%'
			
			rRate = (Number(data["Referral Success Rate"]) * 100).toFixed(2)
			rRate += '%'
	
			let totalWL = parseInt(data["Total LinkedIn"],10) + parseInt(data["Total Website"],10)
	
			let wAppsSuccess = Number(data["Website Success Rate"]) * parseInt(data["Total Website"], 10)
			let lAppsSuccess = Number(data["LinkedIn Success Rate"]) * parseInt(data["Total LinkedIn"], 10)
			wlRate = (((wAppsSuccess + lAppsSuccess) / totalWL)*100).toFixed(2) 
			wlRate += '%'
	
			tRate = (Number(data["Tufts Success Rate"]) * 100).toFixed(2)
			tRate += '%'
	
			setAllApps(allApps)
			setTotalReponse(cumRes)
			setReferral(rRate)
			setTufts(tRate)
			setWL(wlRate)
		}

		csv('JobSearchDataTotals.csv')
		.then(data => {
			setData(data[0])
			calculateValues(data[0])
		})
		.catch(err => console.log(err))

		//get data for sankey diagram
		fetch('SankeyData.json')
		.then(data => data.json())
		.then(data => {
			setSankeyData(data)
		})
		.catch(err => console.log(err))

	}, [])

		

	

	return (
		<>
			<Header data = {numActiveInterviews} status = {status} date = {currentDate}/>
			<Writeup title="Job Search During Corona" body={getBody(1)}/>
			<div className="kpiContainer">
				
				<KPI title="Website/LinkedIn Rate" data={WLRate}/>
				<KPI title="Referral Rate" data={referralRate}/>
				<KPI title="Tufts Handshake Rate" data={tuftsRate}/>
				<KPI title="Website/LinkedIn Rate" data={WLRate}/>
				<KPI title="Referral Rate" data={referralRate}/>
				<KPI title="Tufts Handshake Rate" data={tuftsRate}/>
			</div>
			<div className="kpiContainer2">
				<div className="kpiLines">
					<KPI title="Website/LinkedIn Rate" data={WLRate}/>
					<KPI title="Referral Rate" data={referralRate}/>
					<KPI title="Tufts Handshake Rate" data={tuftsRate}/>
				</div>
				<div className="kpiLines">
					<KPI title="Website/LinkedIn Rate" data={WLRate}/>
					<KPI title="Referral Rate" data={referralRate}/>
					<KPI title="Tufts Handshake Rate" data={tuftsRate}/>
				</div>
			</div>

			<ColorLegend width="1200" height="80"/>

			{sankeyData ?
			<Chart data={sankeyData} width="1100" height="450"/>
			: null
			}
			<br></br>
			<Writeup title="Conclusions" body={getBody(2)}/>

			<Footer />
		</>
	)

}


export default App