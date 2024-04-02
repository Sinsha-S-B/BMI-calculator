
const BmiScore = (props) => {
  console.log(props,'propsss')
  return (
    <div>
      bmi score {props.bmiNo}<br/>
      bmi type {props.bmiName}
    </div>
  )
}

export default BmiScore
