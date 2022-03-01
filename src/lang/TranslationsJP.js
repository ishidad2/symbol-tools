export default {
  ja: {
    Head: {
      title: 'Symbol-Tool(JP)',
    },
    Index: {
      home: {
        placeholder: '例）dual-1.nodes-xym.work 「ドメイン名（FQDN）を入力してください。httpや:3000ポート番号は入力しないでください',
        message: 'ノードURLを入力したら検索ボタンを押してください。'
      },
      peer: {
        title: 'ピアノード一覧',
        subtitle: 'ノードリストをクリックするとノードURLを変更することが出来ます。',
        label: 'ピアノード検索'
      },
    },
    UnlockedAccount: {
      title: 'unlockedAccount一覧',
      accountNumMsg: '受け入れ済みアカウント数'
    },
    Harvest: {
      input: {
        wallet: 'ウォレットアドレス',
        wallet_placeholder: '例）NDBSQQFMPJION5C6S5MTZHTXZF7YLX7UZHFLBOA',
        node: '委任先のノードURL',
        node_placeholder: '例）dual-1.nodes-xym.work 「ドメイン名（FQDN）を入力してください。httpや:3000ポート番号は入力しないでください」'
      },
      message: {
        msg1: 'ハーベストノードのURLと自身のウォレットアドレスを入力したら確認ボタンを押してください。',
        msg2: '※ウォレットアドレスと委任先ノードURLはブラウザのローカルストレージに保存されますので、絶対に秘密鍵を入力したりしないでください。'
      },
      status: {
        title: 'ハーベストの状態',
        nodata: '表示するデータがありません',
        active: '有効',
        invalid: '無効',
        node_public_key: 'リンクされたノード公開鍵',
        remote_public_key: 'リンクされた公開鍵',
        vrf_publick_key: 'VRF公開鍵',
        harvest_detail_title: 'ハーベストの状態判定方法',
        harvest_detail_message1: '上記の３つの値があること及び委任先のノードのunlockdAccountにリンクされた公開鍵があることが条件です。',
        harvest_detail_message2: 'それ以外は無効が表示されます。',
        harvest_detail_message3: 'これは独自にウォレットのソースコードを解析し勝手に導き出した結果なので、なんの保証もありません。',
        harvest_detail_message4: 'あくまで目安として判断してご利用ください。'
      }
    },
    Qr: {
      message: 'NEM及びXYMでの支援をお待ちしております。'
    },
    Button: {
      clear: 'クリア',
      search: '検索',
      caku: '確認',
      save: '保存',
      close: '閉じる'
    },
    Input: {
      search: {
        node: 'ノードを検索',
        peer: 'unlockedAccount検索',
        node_url: 'ノードURL',
        node_url_placeholder: '例）dual-1.nodes-xym.work 「ドメイン名（FQDN）を入力してください。httpや:3000ポート番号は入力しないでください',
        unlockedAccount_rul: 'リンクされた公開鍵を検索'
      }
    },
    NoLinked: 'リンクしていません',
    Menu: {
      menu1: 'PeerNode確認ツール',
      menu2: 'harvest状況確認ツール',
      menu3: '言語設定',
      ja: 'Japanese',
      en: 'English'
    }
  }
}
