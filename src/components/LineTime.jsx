import React from 'react'
import { Chrono } from 'react-chrono';

import './LineTime.css'



export const LineTime = ({items}) => {
  return (
    <Chrono 
        items={items} 
        mode="VERTICAL"
        theme={{
        primary: '#0096A9',
        secondary: '',
        cardBgColor: '#22262A',
        titleColor: 'white',
        titleColorActive: '',
        cardSubtitleColor: 'white',
        cardTitleColor: '',
        cardDetailsColor: '#EAEAEA'

        }}
        cardMaxHeight={210}
        cardHeight={210} // sets the height of the timeline card to 200px
        mediaHeight={200} // sets the height of the media element to 100px
        contentDetailsHeight={80} // sets the height of the detailed text to 80px
        readMore={true}
        cardWidth={600} 
        cardMaxWidth={600} 

        fontSizes = {{
            cardTitle: '1.2rem',
            cardText: '1.5rem',
            cardSubtitle: '0.9rem',
        }}
        >
        
    </Chrono>
  )
}
