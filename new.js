let balance = 15000

const transact = parseInt(prompt('Welcome To PBank Services\n1. Check Balance\n2. Recharge\n3. Transfer\n4. Pay Bills\n5. Get Loan\n6. Open New Account\n7. Pension'))

switch(transact){
    case 1:
        alert(`Your current balance is ${balance}USD`)
        break
    case 2:
        recharge()
        break
    case 3:
        transfer()
        break
    case 4:
        paybills()
        break
    case 5:
        alert('No available loans Onigbese')
        break
    case 6:
        prompt('What is your bvn ?')
        break
    case 7:
        alert('No pensions available')
        break
    default:
        alert('Invalid Option')
}


function recharge() {
    const rechgtype = parseInt(prompt('Select one of our services\n1.Data\n2.Airtime'))

    switch (rechgtype) {
        case 1:
            alert('Data services are down')
            break
        case 2:
            const amount = parseInt(prompt('Enter Amount:\n200\n500\n1000\n1500\n2000\n2500\n3000\nEnter any amount of your choice:'))
            const num = prompt('Enter destination number')
            if (amount <= balance) {
                balance -= amount
                alert(`Your recharge of ${amount} is succesful to ${num}\nYour available balance is ${balance}NGN`)
            } else {
                alert('You do not have sufficient funds')
            }
            break
        default:
            alert('Invalid Amount')
    }
}
function transfer() {
    const transtype = parseInt(prompt('Select a Bank:\n1.Zenith bank\n2.Gt bank\n3.Access bank\n4.FCMB\n5.Kuda Bank\n6.iBabs Bank\n7.UBA Bank'))

    switch (transtype) {
        case 1:
            alltransfer()
            break
        case 2:
            alltransfer()
            break
        case 3:
            alltransfer()
            break
        case 4:
            alltransfer()
            break
        case 5:
            alltransfer()
            break
        case 6:
            alltransfer()
            break
        case 7:
        alltransfer()
        break
        default:
            alert('Invalid Selection')
    }
}
function alltransfer() {
    const account = parseInt(prompt('Input account number:'))
    const amount = prompt('Enter Amount:')
    const name = prompt('Account name:')
    if (amount <= balance) {
        balance -= amount
        alert(`You have successfully sent ${amount}NGN to ${account} ${name}\nYour available balance is ${balance}NGN`)
    } else {
        alert('You do not have sufficient balance')
    }
}