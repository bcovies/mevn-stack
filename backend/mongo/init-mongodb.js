db.createUser(
    {
        user: 'mernUser', 
        pwd: 'mernPassword', 
        roles: [
            {
                role: 'readWrite', 
                db: 'mernStack'
            }
        ]
    }
);