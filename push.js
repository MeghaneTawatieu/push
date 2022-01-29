var push = require('web-push');

let vapidKeys ={
    publicKey: 'BGlUAW9fXUfY2EQDmTy0OAPJ6PODByh8I3AH9t6lj4dn3hF7sjkA3W4F-X8O8rghuxryD4-flPotMk1pFnzEuSU',
    privateKey: 'qowycvSWAdZRB5cw9W3Mv_8awDm4a1IqUGIcLuvlWzU'
  }
push.setVapidDetails('mailto:test@code.co.uk',vapidKeys,publicKey,vapidKeys.privateKey)

let sub= {};

push.sendNotification(sub, 'test message')