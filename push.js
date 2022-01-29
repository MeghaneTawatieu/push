var push = require('web-push');

let vapidKeys ={
  publicKey: 'BGlUAW9fXUfY2EQDmTy0OAPJ6PODByh8I3AH9t6lj4dn3hF7sjkA3W4F-X8O8rghuxryD4-flPotMk1pFnzEuSU',
  privateKey: 'qowycvSWAdZRB5cw9W3Mv_8awDm4a1IqUGIcLuvlWzU'
};

push.setVapidDetails('mailto:test@code.co.uk',
vapidKeys,publicKey,
vapidKeys.privateKey
);

let sub= {
  endpoint: 'https://wns2-par02p.notify.windows.com/w/?token=BQYAAABboOIwd25dzXtNHrhE6RDCPVQ9S4t7eSWjF7HFSECqV6SR4oJji2%2fx6su8WVTiMuwTjXUMpckj8MStauWKiLWIdhl3NQKKZ1AsVLtJqQLNnLQ4g%2bQFNhsGeW%2fXGZhHFw54GYXIaqpLWVEl04Hnh2Ak7iWrqzYa3aLp5ZwC%2bFJAuYY9BCnpqxEngHiRs9LcFT0nDkTwepcPsekwquT8rcd%2fkj9Eallvnn%2f8WYeQ1o%2fMMMs6VISuruX%2bX19Y8ZeYxRd5bW3CNPSjm6XSOx4F0150%2f0KnrdQdqq8zbOOGkQfu3tJFIYr1ShFvqXCID%2bGl%2fFIBUHDpZh6RTjQl9CyyAx7Q',
  expirationTime:null,
  keys:{
    p256dh:"BOdnM2zeih8N4wi-wACMo-QW3T_1NumfCa8msfmJy4ZFlbyg-MbwbrE5wT6U1YSt_V32Ygu-90Oc4bNE_3RgmnA",
  auth:"AkeuIouhrU4kpaIx5qV3cw"
  }
};



push.sendNotification(sub, 'test message')
