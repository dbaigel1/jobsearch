import React from 'react'

export const getBody = (n) => {
    if(n == 1) {
        return(
            <p id="writeupBody">
            I returned home from living in China in late 2019 and decided to pursue a career in software development. Spending a couple of months preparing for technical interviews and bolstering my skills by developing some side projects, I was ready to apply starting in February of 2020. Unfortunately, the breakout of Corona Virus in the US was right around the corner. This dashboard visualizes what my job search has looked like for the last few months; I imagine many people out there are having similar struggles.
            <br></br><br></br>

            For those of you that have never seen a Sankey Diagram before, I'll explain how to read the chart. The first four boxes (nodes) on the left represent the four main ways I have sent out applications (LinkedIn, Company Website, Referred by Friend or Recruiter, and Tufts' Career Portal). The nodes in the middle of the chart represent the different stages in the interview process (first round interview, second round, etc.), and the final nodes on the right side of the screen represent the results (Offer, Rejected, No Response). The lines that connect them represent the number of applications that go from one stage in the process to another. The thicker the line, the more applications that follow that path. Hover over any line or node to get the data.
            </p>
        )
    }
    else {
        return(
            <p id="writeupBody">
                Looking at this data I've gained some insight into which job application strategies are effective. For example, applying on LinkedIn or directly on a company's website has only led to one interview in well over 100 applications. On the other end of the spectrum, applying through a recruiter or employee referral has been by far my most successful method in landing interviews however even with this strategy, I still get rejected without an interview the majority of the time. The Tufts Job Portal seems to be more effective than applying elsewhere without a referral, but I need to send out more applications since the current sample size is small.
                <br></br><br></br>
                Moving forward I plan on continuing to leverage as many connections as I can, while also looking for new strategies to apply. Those strategies may include directly emailing recruiters at companies, and looking at job listings other than on LinkedIn. I think it's also important to note that I'm looking for jobs at a crazy time. I've had a lot of "successful" interviews with companies that I've been rejected from simply because that company decided to take a more experienced developer. If you're reading this and facing a similar struggle in your job hunt, know that it's more a sign of the times than anything, and don't give up. If your company is in need of a front-end/full-stack software developer, I know just the guy <a id="resumelink" target="_blank" href="resume.pdf">(Resume)</a>! 
            </p>
        )
    }
}