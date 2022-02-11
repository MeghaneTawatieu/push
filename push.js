var push = require('web-push');

let vapidKeys ={
  publicKey: 'BGlUAW9fXUfY2EQDmTy0OAPJ6PODByh8I3AH9t6lj4dn3hF7sjkA3W4F-X8O8rghuxryD4-flPotMk1pFnzEuSU',
  privateKey: 'qowycvSWAdZRB5cw9W3Mv_8awDm4a1IqUGIcLuvlWzU'
};

push.setVapidDetails('mailto:meghanekasseh@gmail.com',
vapidKeys.publicKey,
vapidKeys.privateKey
);

let sub = {endpoint:"https://wns2-par02p.notify.windows.com/w/?token=BQYAAAD2ycMttOARrnvyRGpOxJDrDRQwBUF8U9eitfC8YgfUXz0%2bRZuqDattbh7POnumvpyiROBdGQKnymLj951fbxpxfQsVW8uyUY3hcMth9Bsqjc2kUSI8tF4CQHjrKJQwk0BW59PCRXxmgpMAejcJ1vV8YpRsSiSXcUy7%2fGlobwzvXOtB94KhIUWqD%2bWvU9k8GUUq429rj99Vh7K%2fk0lVTeK9xhXnBiL8N1XglGd1cClsHspRVfjEgqT3UFsunk%2b8ZHF87pwDL5vKoiaEbB%2fSF21K1gQsamAIuFvqbj7CAJGypZTRMMY5N%2f7wubAoTDhBPGFlJCPHDUKkMq5EJnT2DbJEim6C3I7oq2gGJoWxp%2f1plADNoMwVhBm7WA8BllO7fdM%3d",
expirationTime:null,
keys:{
  p256dh:"BM0t2QDVWjnkzS3BOwdhXqjlvAGYAuH6OON7UtOMzVYQe_F6KUBaZeicDu_Zvya7T2Snek9AjhBZOEsDFqvjks0",
  auth:"77x2r-ihqgFMw9Cy-6KhXw"
}}


//   endpoint:"https://wns2-par02p.notify.windows.com/w/?token=BQYAAABboOIwd25dzXtNHrhE6RDCPVQ9S4t7eSWjF7HFSECqV6SR4oJji2%2fx6su8WVTiMuwTjXUMpckj8MStauWKiLWIdhl3NQKKZ1AsVLtJqQLNnLQ4g%2bQFNhsGeW%2fXGZhHFw54GYXIaqpLWVEl04Hnh2Ak7iWrqzYa3aLp5ZwC%2bFJAuYY9BCnpqxEngHiRs9LcFT0nDkTwepcPsekwquT8rcd%2fkj9Eallvnn%2f8WYeQ1o%2fMMMs6VISuruX%2bX19Y8ZeYxRd5bW3CNPSjm6XSOx4F0150%2f0KnrdQdqq8zbOOGkQfu3tJFIYr1ShFvqXCID%2bGl%2fFIBUHDpZh6RTjQl9CyyAx7Q",
//   expirationTime:null,
//   keys:{
//     p256dh:"BOdnM2zeih8N4wi-wACMo-QW3T_1NumfCa8msfmJy4ZFlbyg-MbwbrE5wT6U1YSt_V32Ygu-90Oc4bNE_3RgmnA",
//     auth:"AkeuIouhrU4kpaIx5qV3cw"
//  }
// }; 


push.sendNotification(sub, 'test message')
