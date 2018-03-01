import React, { Component } from 'react'
import {Wrapper} from './BasicComponents'





class PreparationView extends Component {

    render() {

       const stepsList = () => {
           if (this.props.instructions) {
               return this.props.instructions[0].steps.map((step, index) => {
                return (
                    <StepWrapper key={index}>
                        <Step>{step.step} </Step>
                    </StepWrapper>
                )
            })
           }
       }


   

        return (
           <PreparationWrapper>
               {stepsList()}
           </PreparationWrapper>


        )
    }
  }
  
  export default PreparationView;

  const PreparationWrapper = Wrapper.extend`
    padding : 2vh 0;
    height : auto;
  `

  const StepWrapper = Wrapper.extend`
  flex-direction : row;
   border: 1px solid;
   border-color: #e5e6e9 #dfe0e4 #d0d1d5;
   border-radius: 4px;
   margin : 1%;
   min-height : 5vh;
   text-align : center;
   background-color : ghostwhite;
 `

const Step = Wrapper.extend`
  padding 1% 0;
`