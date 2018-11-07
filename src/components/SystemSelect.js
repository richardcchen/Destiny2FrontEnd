import React from 'react'
import {Dropdown} from 'semantic-ui-react'

const systemOptions = [
  {
    text: "BattleNet",
    value: "4",
    image: {avatar:true, src: 'https://cdn.vox-cdn.com/thumbor/HVD3QJMFr_kVE_J6--ZA4M6iyEM=/0x0:900x506/1820x1213/filters:focal(378x181:522x325):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54844817/battlenetlogo.0.jpg'}
  },
  {
    text: "XBOX",
    value: "1",
    image: {avatar:true, src: 'https://cdn.vox-cdn.com/thumbor/bDw9XfIma-46qgmTokJC5shCN2A=/0x0:1100x582/1200x800/filters:focal(462x203:638x379)/cdn.vox-cdn.com/uploads/chorus_image/image/61158887/xbox_one.0.1473206294.0.png'}
  },
  {
    text: "PS4",
    value: "2",
    image: {avatar:true, src: 'https://i.pinimg.com/originals/ff/e1/8b/ffe18bc07f4987eed129481171683dad.jpg'}
  },
]

const SystemSelect = (props) => (
  <Dropdown onChange={props.onChange} placeholder='Select System' fluid selection options={systemOptions} />
)

export default SystemSelect
