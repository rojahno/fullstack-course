import { defineStore } from "pinia";

export const useFormStore = defineStore({
  id: "form",
  state: () => ({
    name_text: "",
    email_text: "",
    message_text: "",
    name_isValid: false,
    email_isValid: false,
    message_isValid: false,
  }),
  getters: {
    get_name_text(): string {
      return this.name_text;
    },
    get_email_text(): string {
      return this.email_text;
    },
    get_message_text(): string {
      return this.message_text;
    },
  },
  actions: {
    update_name_text(name: string) {
      this.name_text = name;
      //   this.validate_name(name);
    },
    update_email_text(email: string) {
      this.email_text = email;
      //   this.validate_email(email);
    },
    update_message_text(message: string) {
      this.message_text = message;
      //   this.validate_message(message);
    },

    //     validate_name(name: string) {
    //       if (name.length > 0) {
    //         this.name_isValid = true;
    //       } else {
    //         this.name_isValid = false;
    //       }
    //     },
    //     validate_email(email: string) {
    //       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //         this.email_isValid = true;
    //         return;
    //       }
    //       this.email_isValid = false;
    //     },
    //     validate_message(message: string) {
    //       if (message.length > 0) {
    //         this.message_isValid = true;
    //       } else {
    //         this.message_isValid = false;
    //       }
    //     },

    //     isFormValid(): boolean {
    //       if (this.name_isValid && this.email_isValid && this.message_isValid) {
    //         return true;
    //       }
    //       return false;
    //     },
  },
});
