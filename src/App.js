import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import s from "./components/Phonebook.module.css";

function App() {
  return (
    <div className={s.container}>
      <div className={s.phonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={s.contactsContainer}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
