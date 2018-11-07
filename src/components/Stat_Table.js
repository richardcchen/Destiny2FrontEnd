import React from 'react'
import {Table} from 'semantic-ui-react'

const Stat_Table = ({statsObj, userObj}) => {
  console.log("userObj", userObj)
  const PvP_Header = statsObj.mergedAllCharacters.results.allPvP
  return (
  <Table definition>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell>Value</Table.HeaderCell>
      <Table.HeaderCell>Type</Table.HeaderCell>
      <Table.HeaderCell>Category</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.Cell>Membership Id</Table.Cell>
      <Table.Cell>{userObj.userInfo.membershipId}</Table.Cell>
      <Table.Cell>ID</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Character Id 1</Table.Cell>
      <Table.Cell>{userObj.characterIds[0]}</Table.Cell>
      <Table.Cell>ID</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Character Id 1</Table.Cell>
      <Table.Cell>{userObj.characterIds[1]}</Table.Cell>
      <Table.Cell>ID</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Character Id 1</Table.Cell>
      <Table.Cell>{userObj.characterIds[2]}</Table.Cell>
      <Table.Cell>ID</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.activitiesEntered.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.activitiesEntered.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.activitiesWon.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.activitiesWon.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Activites Win %</Table.Cell>
      <Table.Cell>{Math.floor(PvP_Header.allTime.activitiesWon.basic.value / PvP_Header.allTime.activitiesEntered.basic.displayValue * 100)}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.kills.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.kills.basic.displayValue}</Table.Cell>
      <Table.Cell>All Time</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.kills.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.kills.pga.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.assists.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.assists.pga.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.efficiency.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.efficiency.basic.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.killsDeathsRatio.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.killsDeathsRatio.basic.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>{PvP_Header.allTime.killsDeathsAssists.statId}</Table.Cell>
      <Table.Cell>{PvP_Header.allTime.killsDeathsAssists.basic.displayValue}</Table.Cell>
      <Table.Cell>Per Game Average</Table.Cell>
      <Table.Cell>PvP</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
)

}
export default Stat_Table
