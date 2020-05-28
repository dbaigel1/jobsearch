import React from "react"
import Header from "./Header"
import KPI from "./KPI"
import Chart from "./Chart"
import Writeup from "./Writeup"
import Footer from "./Footer"

const App = () => {

	return (
		<div>
			<Header/>
			
			<div className="kpiContainer">
				<KPI />
				<KPI />
				<KPI />
				<KPI />
				<KPI />
				<KPI />
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