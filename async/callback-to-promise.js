'use strict';
/**
class UserStorage{
    loginUser(id, password, onSuccess, onError){// method
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            )
            {
                onSuccess(id);
            }
            else{
                onError(new Error('not Found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){// method
        setTimeout(() => {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    (user) =>{// onSuccess를 통해 id라는 매개변수는 user이다.
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                alert(error);
            }
        );
    },
    (error) => {console.log(error)}
);
*/
class UserStorage{
    loginUser(id, password){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(
                        (id === 'ellie' && password === 'dream') ||
                        (id === 'coder' && password === 'academy')
                    )
                    {
                        resolve(id);
                    }
                    else{
                        reject(new Error('not Found'));
                    }
                }, 2000);
            });
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie'){
                    resolve({name: 'ellie', role: 'admin'});
                }
                else{
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
    .then(userStorage.getRoles) // resolve이면
    .then(user => alert(`Hello ${user.name}, you have a ${user.role}`)) // resolve이면
    .catch(alert);
    // Uncaught Error를 종종 본 적이 있다.
    // 잡히지 않은 error를 뜻한다.
    // .catch를 이용하여 잡아준다.
