import { Nav } from '@fluentui/react';

const navStyles = { root: { width: 300 } };

const navLinkGroups = [
  {
    name: 'Players order',
    expandAriaLabel: 'Expand Players order section',
    collapseAriaLabel: 'Collapse Players order section',
    links: [
      {
        key: 'GetFirstPlayer',
        name: 'Get First Player',
        url: '#/order/firstplayer',
      },
      {
        key: 'GetPlayersOrder',
        name: 'Get Players Order',
        url: '#/order/playersorder',
      },
    ],
  },
  {
    name: 'Choose fraction',
    expandAriaLabel: 'Expand Choose Fraction section',
    collapseAriaLabel: 'Collapse Choose Fraction section',
    links: [
      {
        key: 'ChooseColors',
        name: 'Choose Colors',
        url: '#/fraction/colors',
      },
      {
        name: 'Choose Fraction in Game',
        expandAriaLabel: 'Expand Choose Fraction in Games section',
        collapseAriaLabel: 'Collapse Choose Fraction in Games section',
        links: [
          {
            key: 'TerraMystica',
            name: 'Terra Mystica',
            url: '#/fraction/games/terramystica'
          },
          {
            key: 'Everdell',
            name: 'Everdell',
            url: '#/fraction/games/everdell'
          },

        ],
      },
      {
        key: 'CustomFraction',
        name: 'Choose Custom Fractions',
        url: '#/fraction/custom',
      },
    ],
  },
];


function App() {
    return (
      <div className = "App" >
            <Nav styles={navStyles} ariaLabel="Choose game helper" groups={navLinkGroups} />
      </div>
    );
}

export default App;
