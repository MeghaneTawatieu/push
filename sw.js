// self.addEventListener('push', () => {
//     self.registration.showNotification('Hello world!', options);

    self.addEventListener('push', function(e) {
      var options = {
        body: 'Ceci est une notification',
        
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: '2'
        },
        actions: [
          {
            action: 'explore', title: 'Notification dincident',
           
          },
          {
            action: 'close', title: 'Close',
           
          },
        ]
      };
      e.waitUntil(
        self.registration.showNotification('Nouvel incident!', options
        ));
    });
 