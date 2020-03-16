import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.start, props.end).map(sushi => <Sushi eaten={false} key={sushi.id} sushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton moreButtonHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer