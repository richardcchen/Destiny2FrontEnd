import React from 'react'
import {Table} from 'semantic-ui-react'

let style = {
  opacity: 0.6,
  backgroundColor: 'lightgoldenrodyellow',
  fontSize: 'large'
}

const Stat_Table = ({statsObj, userObj}) => {
  const PvP_Header = statsObj.mergedAllCharacters.results.allPvP
  const PvE_Header = statsObj.mergedAllCharacters.results.allPvE.allTime
  debugger
  if (statsObj === undefined){
    return null
  }
  debugger
  return (
  <Table definition style={style}>
  <Table.Header>
    <Table.Row style={style}>
      <Table.HeaderCell />
      <Table.HeaderCell>Value</Table.HeaderCell>
      <Table.HeaderCell>Type</Table.HeaderCell>
      <Table.HeaderCell>Category</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>Display Name</Table.Cell>
      <Table.Cell>{userObj.userInfo.displayName}</Table.Cell>
      <Table.Cell>ID</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Membership Id</Table.Cell>
      <Table.Cell>{userObj.userInfo.membershipId}</Table.Cell>
      <Table.Cell>ID</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Games Played</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.activitiesEntered.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Games Won</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.activitiesWon.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Kills</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.kills.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Kills</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.kills.pga.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Assists</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.assists.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Assists</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.assists.pga.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Average Lifespan</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.averageLifespan.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Best Single Game Score</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.bestSingleGameScore.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Kill Death Ratio</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.killsDeathsRatio.basic.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Kill Death Assist Ratio</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.killsDeathsAssists.basic.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Efficiency</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.efficiency.basic.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Best Weapon Type</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.weaponBestType.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Win Loss Ratio</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.winLossRatio.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Activities Cleared</Table.Cell>
      <Table.Cell>{PvE_Header.activitiesCleared.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvE</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Best Single Game Kills</Table.Cell>
      <Table.Cell>{PvE_Header.bestSingleGameKills.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvE</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Best Single Game Score</Table.Cell>
      <Table.Cell>{PvE_Header.bestSingleGameScore.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvE</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Best Weapon Type</Table.Cell>
      <Table.Cell>{PvE_Header.weaponBestType.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvE</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
)

}
export default Stat_Table
