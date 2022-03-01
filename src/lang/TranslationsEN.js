export default {
  en: {
    Head: {
      title: 'Symbol-Tool(EN)',
    },
    Index: {
      home: {
        placeholder: 'Ex) dual-1.nodes-xym.work Enter the domain name (FQDN). Do not enter https or: 3001 port number.',
        message: 'After entering the node URL, press the search button.。'
      },
      peer: {
        title: 'List of peers',
        subtitle: 'You can change the URL of the node you want to search by clicking the node list.。',
        label: 'Node search'
      },
    },
    UnlockedAccount: {
      title: 'unlocked Account List',
      accountNumMsg: 'Number of accounts accepted'
    },
    Harvest: {
      input: {
        wallet: 'Wallet address',
        wallet_placeholder: '例）NDBSQQFMPJION5C6S5MTZHTXZF7YLX7UZHFLBOA',
        node: 'Delegated node URL',
        node_placeholder: 'Ex) dual-1.nodes-xym.work Enter the domain name (FQDN). Do not enter https or: 3001 port number.'
      },
      message: {
        msg1: 'Enter the URL of the harvest node and your wallet address, then press the confirm button.',
        msg2: '* The wallet address and delegation node URL are saved in the local storage of the browser, so never enter the private key.'
      },
      status: {
        title: 'Harvesting status',
        nodata: 'There is no data to display',
        active: 'ACTIVE',
        invalid: 'INACTIVE',
        node_public_key: 'Node Public Key',
        remote_public_key: 'Remote Public Key',
        vrf_publick_key: 'VRF public Key',
        harvest_detail_title: 'Harvest status judgment method',
        harvest_detail_message1: 'The condition is that there are the above three values and that there is a public key linked to the unlockedAccount of the delegated node.',
        harvest_detail_message2: 'Otherwise, it will be displayed as invalid.',
        harvest_detail_message3: 'This is the result of our own analysis of the wallet source code and acquisition without permission, so there is no guarantee.',
        harvest_detail_message4: 'Please use it as a reference value only.'
      }
    },
    Qr: {
      message: 'We look forward to your support with NEM and XYM.'
    },
    Button: {
      clear: 'Clear',
      search: 'Search',
      caku: 'Confirmation',
      save: 'Save',
      close: 'Close'
    },
    Input: {
      search: {
        node: 'Find node',
        peer: 'unlockedAccount search',
        node_url: 'Node URL',
        node_url_placeholder: 'Ex) dual-1.nodes-xym.work Enter the domain name (FQDN). Do not enter https or: 3001 port number.',
        unlockedAccount_rul: 'Find the linked public key'
      }
    },
    NoLinked: 'Not linked',
    Menu: {
      menu1: 'PeerNode confirmation tool',
      menu2: 'Harvest status check tool',
      menu3: 'Preferred Language',
      ja: 'Japanese',
      en: 'English'
    }
  }
}
