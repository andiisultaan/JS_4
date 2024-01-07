let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    // write your code here
    
    // Prompt the user for a new contact
    let newName = prompt("Enter the name of the new contact:");
    let newPhone = prompt("Enter the phone number of the new contact:");
    let newEmail = prompt("Enter the email address of the new contact:");
    
    // Create a new contact object using the user's input
    let newContact = {
      name: newName,
      phone: newPhone,
      email: newEmail
    };
    
    // Add the new contact to the end of the contacts array
    contacts.push(newContact);
    
    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);