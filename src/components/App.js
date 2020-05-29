import React, {useState, useEffect} from "react"
import Header from "./Header"
import KPI from "./KPI"
import Chart from "./Chart"
import Writeup from "./Writeup"
import Footer from "./Footer"
import {csv} from 'd3'
import moment from 'moment'

const App = () => {
	const [totalData, setData] = useState("")
	const [allApps, setAllApps] = useState(0)
	const [totalReponse, setTotalReponse] = useState(0)
	const [referralRate, setReferral] = useState(0)
	const [WLRate, setWL] = useState(0)
	const [tuftsRate, setTufts] = useState(0)
	const [status, setStatus] = useState("")
	const [currentDate, setDate] = useState("")
	const numActiveInterviews = 2

	useEffect(() => {
		setDate(moment().format('MM/DD/YYYY'))
		//can be: Applying, Interviewing, Accepted, Shelved
		let accepted = false
		if(numActiveInterviews > 0) { 
			setStatus("Interviewing")
		}
		else {
			accepted ? setStatus("Accepted") : setStatus("Applying")
		}


		csv('JobSearchDataTotals.csv')
		.then(data => {
			console.log(data[0])
			setData(data[0])
			calculateValues(data[0])
		})
		.catch(err => console.log(err))
	}, [])
	
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

	return (
		<div>
			<Header data = {numActiveInterviews} status = {status} date = {currentDate}/>

			<div className="kpiContainer">
				
				<KPI title="Active Interviews" data={numActiveInterviews}/>
				
				<KPI title="Total Applications" data={allApps}/>
				<KPI title="Total Interview Rate" data={totalReponse}/>
				<KPI title="Website/LinkedIn Rate" data={WLRate}/>
				<KPI title="Referral Rate" data={referralRate}/>
				<KPI title="Tufts Handshake Rate" data={tuftsRate}/>
			</div>

			<Chart />

			<Writeup title="writeup title" body="writeup body"/>
			{/* Header
					Job Status
					Title (Daniel's Job Search)
					Date (last updated)
					***Current Number of companies im actively interviewing with
				
				KPIs
					num total applications
					total positive/negative reponse %
					cold app response % (website/linkedin)
					referral app response %
					tufts handshake response %
					comment: each % KPI will show positive reponse rate (blue)
					and negative reponse rate (orange)
					
				
				D3 Sankey Diagram

				Writeup
					Who am I and what is this visualization
				
			*/}
			<Footer />
		</div>
	)

}


export default App