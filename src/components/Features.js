import React, { Component } from 'react'
import FeaturesCard from './Cards/features_cards'
 class Features extends Component {
     constructor(props){
         super(props)
         this.state={
             features:[
                 {
                header:'Free Shipping',
                icon:<i className="fas fa-bicycle fa-2x text-center"></i> 
                 },
                 {
                 header:'save 50% up',
                icon:<i className="fas fa-gem fa-2x text-center"></i>

                 },{
                     header:'online pay',
                     icon:<i className="fas fa-credit-card fa-2x text-center"></i>
                 },{
                     header:'track order',
                     icon:<i className="fas fa-map-marker-alt fa-2x text-center ml-2 "></i>
                 }
             ]
         }
     }

    render() {
        const{features}=this.state
     const allFeatures=features.map(feature=>{
            return(
<FeaturesCard features={feature}/>
            )
        })
        return (
            <div className="container">
            <div className="row">
             {allFeatures}
              </div>
          </div>
        )
    }
}

export default Features