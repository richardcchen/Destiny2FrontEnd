import React from 'react'
import {Dropdown} from 'semantic-ui-react'

const systemOptions = [
  {
    text: "BattleNet",
    value: "4",
    image: {avatar:true, src: 'http://chittagongit.com//images/battle-net-icon/battle-net-icon-17.jpg'}
  },
  {
    text: "XBOX",
    value: "1",
    image: {avatar:true, src: 'http://www.bungie.net/img/theme/destiny/icons/icon_xbl.png'}
  },
  {
    text: "PS4",
    value: "2",
    image: {avatar:true, src: 'http://www.bungie.net/img/theme/destiny/icons/icon_psn.png'}
  },
]

const SystemSelect = (props) => (
  <Dropdown onChange={props.onChange} placeholder='Select System' fluid selection options={systemOptions} />
)

export default SystemSelect
