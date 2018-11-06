import React from 'react'
import {Dropdown} from 'semantic-ui-react'

const systemOptions = [
  {
    text: "PC",
    value: "PC",
    image: {avatar:true, src: 'https://cdn2.iconfinder.com/data/icons/multimeda/100/desktop-512.png'}
  },
  {
    text: "XBOX",
    value: "XBOX",
    image: {avatar:true, src: 'https://cdn.vox-cdn.com/thumbor/bDw9XfIma-46qgmTokJC5shCN2A=/0x0:1100x582/1200x800/filters:focal(462x203:638x379)/cdn.vox-cdn.com/uploads/chorus_image/image/61158887/xbox_one.0.1473206294.0.png'}
  },
  {
    text: "PS4",
    value: "PS4",
    image: {avatar:true, src: 'https://i.pinimg.com/originals/ff/e1/8b/ffe18bc07f4987eed129481171683dad.jpg'}
  },
]

const SystemSelect = (props) => (
  <Dropdown onChange={props.onChange} placeholder='Select System' fluid selection options={systemOptions} />
)

export default SystemSelect
