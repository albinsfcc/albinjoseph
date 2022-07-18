import React from 'react'

var projects = [{
    name: 'TM Lewin',
    description: 'T. M. Lewin & Sons Limited, commonly known as TM Lewin, is a British online menswear retailer',
    imageClass: 'tmlewin',
    link: 'https://tmlewin.co.uk/'
}, {
    name: 'Showpo',
    description: 'Showpo is an Australian online fashion retailer. Primarily aimed at young women, the company\'s vision is “to be her go to place to shop”.',
    imageClass: 'showpo',
    link: 'https://www.showpo.com/'
}, {
    name: 'Treasury Wine Estates',
    description: 'Treasury Wine Estates is an Australian global winemaking and distribution business with headquarters in Melbourne.',
    imageClass: 'twe',
    link: 'https://www.tweglobal.com/'
}, {
    name: 'Bardot',
    description: 'Bardot brings the latest styles directly to your doorstep.',
    imageClass: 'bardot',
    link: 'https://www.bardot.com/'
}, {
    name: 'T2Tea',
    description: 'T2, officially registered as Tea Too, is a chain of specialty tea shops with stores in Australia, the United Kingdom, the United States, Singapore, and New Zealand.',
    imageClass: 't2tea',
    link: 'https://www.t2tea.com/'
}, {
    name: 'Jets',
    description: 'JETS is for women who want more. For those who live their life with a jetset mindset, and only settle for the best.',
    imageClass: 'jets',
    link: 'https://au.jetsaustralia.com/'
}, {
    name: 'Maison Birks',
    description: 'Birks Group is a designer, manufacturer and retailer of jewellery, timepieces, silverware and gifts, with stores and manufacturing facilities located in Canada and the United States.',
    imageClass: 'birks',
    link: 'https://www.maisonbirks.com/'
}];


function Projects() {
  return (
    <div className='page projects'>
        <div className='banner-main'>
            <h1>Projects</h1>
        </div>
        <div className='row'>
            <div className='col'>
                <div className='project-list'>
                    {projects.map((project, index) => {
                        return(
                            <div className='project' key={index}>
                                <div className={'project-image ' + project.imageClass} >
                                    <div className='project-info'>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <a href={project.link} target='_blank' rel='noopener noreferrer'>Visit Website</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects