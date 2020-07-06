
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
const DELETE_CONTACT_CLASS = 'deleteContact';
const DATA_SELECTOR_ID = 'id';
const CONTACT_CLASS = 'contact';

const contactTemplate = $('#contactTemplate').text();
const $contactListFooterEl = $('#contactListFooter');
const $contactNameEl = $('#name');
const $contactSurnameEl = $('#surname');
const $contactPhoneEl = $('#phone');
const $contactEmailEl = $('#email');
const $contactFormEl =$('#contactForm');
const $dialog = $('#dialog-form').dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        "Create an account": onAddButtonClick,
        "Cancel": function() {
            $dialog.dialog( "close" );
        }
    },
    close: function() {
           $contactFormEl[0].reset();
    }
});
let contactsList = [];


$('#addContact').on('click',() => $dialog.dialog('open'));
$contactListFooterEl.on('click',`.${DELETE_CONTACT_CLASS}`,onContactListElClickToDelete);

init();


function init(){
     fetch(URL)
    .then((res) =>  res.json())
    .then(setTodos)
    .then(renderContactsList)
}
function setTodos(data){
    return(contactsList = data);
}
function renderContactsList(contacts){
    console.log(contacts);
    $contactListFooterEl.html(contacts.map(changeDealKeys).join(''))
}
function changeDealKeys(contact){
    return contactTemplate
    .replace('{{name}}', contact.name)
    .replace('{{surname}}', contact.surname)
    .replace('{{phone}}', contact.phone)
    .replace('{{email}}', contact.email)
    .replace('{{id}}', contact.id);
}
function onContactListElClickToDelete(e){
    const contactId = $(e.target.closest(`.${CONTACT_CLASS}`)).data(DATA_SELECTOR_ID);
    deleteContact(contactId);
    e.stopPropagation();
}
function deleteContact(contactId){
    fetch(URL +'/' + contactId, {
        method: 'DELETE',
    });
    contactsList = contactsList.filter((value) => value.id != contactId);
    renderContactsList(contactsList);
    
}

function onAddButtonClick(){
    const newContact = {
        name: $contactNameEl.val(),
        surname: $contactSurnameEl.val(),
        phone: $contactPhoneEl.val(),
        email: $contactEmailEl.val()
    }
    sendNewProperty(newContact);
    $dialog.dialog( "close" );
}
function sendNewProperty(contact){
    fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(contact),
    })
    .then((res) => res.json())
    .then((data) => {
        contactsList.push(data);
        renderContactsList(contactsList);
    })
}
