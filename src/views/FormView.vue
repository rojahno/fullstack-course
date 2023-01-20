<template>
  <main>
    <form id="contact-form" @submit.prevent="submitForm">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        :value="form.name_text"
        v-on:change="updateName"
        required
      />
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        :value="form.email_text"
        v-on:change="updateEmail"
        required
      />
      <label for="message">Message</label>
      <textarea
        id="message"
        name="message"
        :value="form.message_text"
        v-on:change="updateMessage"
        required
      />
      <button
        id="submit-button"
        value="Submit"
        type="submit"
        :on-submit="submitForm"
      >
        Submit
      </button>
    </form>
  </main>
</template>

<style scoped>
#contact-form {
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #505050;
  border-radius: 5px;
}

input {
  border: 2px solid;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0.25rem;
  min-width: 125px;
  padding: 0.5rem;
  background-color: #d4d4d2;
  transition: border-color 0.5s ease-out;
}
input:optional {
  border-color: gray;
}
input:required:valid {
  border-color: green;
}
/* input:invalid {
    border-color: red;
  } */
input:required:focus:valid {
  background: url("https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg")
    no-repeat 95% 50% lightgreen;
  background-size: 25px;
}
input:focus:invalid {
  background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg")
    no-repeat 95% 50% lightsalmon;
  background-size: 25px;
}

textarea {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px;
  background-color: #d4d4d2;
}
textarea:optional {
  border-color: gray;
}
textarea:required:valid {
  border-color: green;
}
textarea:required:focus:valid {
  background: url("https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg")
    no-repeat 95% 50% lightgreen;
  background-size: 25px;
}
textarea:focus:invalid {
  background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg")
    no-repeat 95% 50% lightsalmon;
  background-size: 25px;
}

button {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ccc;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useFormStore } from "../stores/form";

export default defineComponent({
  setup() {
    const form = useFormStore();

    function updateName(event: Event) {
      let nameString = (event.target as HTMLInputElement).value;
      form.update_name_text(nameString);
    }

    function updateEmail(event: Event) {
      let emailString = (event.target as HTMLInputElement).value;
      form.update_email_text(emailString);
    }
    function updateMessage(event: Event) {
      let messageString = (event.target as HTMLInputElement).value;
      form.update_message_text(messageString);
    }

    // @ts-ignore
    window.stores = { form };

    return {
      form,
      updateName,
      updateEmail,
      updateMessage,
    };
  },
  methods: {
    submitForm(event: Event) {
      event.preventDefault();
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.form.name_text,
          email: this.form.email_text,
          message: this.form.message_text,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(
            "Success!" +
              "\n Name: " +
              data.name +
              " " +
              "\n Email: " +
              data.email +
              " " +
              "\n Message: " +
              data.message +
              "\n was sent to the server"
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
});
</script>
